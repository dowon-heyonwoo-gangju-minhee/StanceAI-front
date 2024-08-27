"use client";

import { useState, useEffect } from "react";
import { differenceInMonths, isBefore, parseISO } from "date-fns";
import PositionSelect from "./PositionSelect";
import ToolSelect from "./ToolSelect";
import ProjectDurationSelect from "./ProjectDurationSelect";
import SortSelect from "./SortSelect";
import CreateProject from "./CreateProject";
import { allProjects } from "@/data/allProjects";
import { useSetRecoilState } from "recoil";
import { atomFilterLists } from "@/hook/recoil/select";
import Search from "./Search";

const SelectBox = () => {
  const setFilteredProjects = useSetRecoilState(atomFilterLists);
  const [filters, setFilters] = useState({
    position: "",
    tools: [],
    duration: "",
    sortOption: "최신순",
    searchTerm: "",
  });

  const isWithinDuration = (start, end, duration) => {
    const months = differenceInMonths(parseISO(end), parseISO(start));
    switch (duration) {
      case "1개월":
        return months <= 1;
      case "3개월":
        return months > 1 && months <= 3;
      case "6개월":
        return months > 3 && months <= 6;
      case "1년":
        return months > 6 && months <= 12;
      case "1년 이상":
        return months > 12;
      default:
        return true;
    }
  };

  const getRecruitmentStatus = (project) => {
    const now = new Date();
    const endDate = parseISO(project.expectedRecruitmentDuration.endDate);
    return isBefore(now, endDate) ? "모집중" : "모집 완료";
  };

  const sortProjects = (projects, sortOption) => {
    switch (sortOption) {
      case "최신순":
      case "인기순":
        return [...projects].sort(
          (a, b) =>
            parseISO(b.expectedRecruitmentDuration.startDate) - parseISO(a.expectedRecruitmentDuration.startDate)
        );
      case "모집중":
        return projects.filter((project) => getRecruitmentStatus(project) === "모집중");
      case "모집 완료":
        return projects.filter((project) => getRecruitmentStatus(project) === "모집 완료");
      default:
        return projects;
    }
  };

  useEffect(() => {
    let result = allProjects.projectInfo.filter((project) =>
      project.recruitmentInfo.some((info) => {
        const positionMatch = !filters.position || info.position === filters.position;
        const toolsMatch =
          filters.tools.length === 0 || filters.tools.some((tool) => info.tools.some((t) => t.stackName === tool)); // 변경된 부분
        const durationMatch =
          !filters.duration ||
          isWithinDuration(
            project.expectedProjectDuration.startDate,
            project.expectedProjectDuration.endDate,
            filters.duration
          );
        const searchMatch =
          !filters.searchTerm || project.projectName.toLowerCase().includes(filters.searchTerm.toLowerCase());

        return positionMatch && toolsMatch && durationMatch && searchMatch;
      })
    );

    result = sortProjects(result, filters.sortOption);
    setFilteredProjects(result);
  }, [filters, allProjects]);

  const handleSearch = (searchTerm) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex justify-start items-center gap-8">
        <PositionSelect onSelect={(position) => setFilters((prev) => ({ ...prev, position }))} />
        <ToolSelect onSelect={(tools) => setFilters((prev) => ({ ...prev, tools }))} />
        <ProjectDurationSelect onSelect={(duration) => setFilters((prev) => ({ ...prev, duration }))} />
        <SortSelect onSelect={(sortOption) => setFilters((prev) => ({ ...prev, sortOption }))} />
        <CreateProject />
      </div>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default SelectBox;
