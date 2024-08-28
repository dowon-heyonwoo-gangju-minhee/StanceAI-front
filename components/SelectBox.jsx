"use client";

import { useState, useEffect } from "react";
import { differenceInMonths, parseISO, isBefore } from "date-fns";
import PositionSelect from "./PositionSelect";
import ToolSelect from "./ToolSelect";
import ProjectDurationSelect from "./ProjectDurationSelect";
import SortSelect from "./SortSelect";
import CreateProject from "./CreateProject";
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
  const [allProjects, setAllProjects] = useState({ projectInfo: [] });

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("allProjects"));
    if (storedProjects) {
      setAllProjects(storedProjects);
    }
  }, []);

  const isWithinDuration = (startDate, endDate, duration) => {
    const months = differenceInMonths(parseISO(endDate), parseISO(startDate));
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

  const getRecruitmentStatus = (recruitmentInfo) => {
    const now = new Date();
    const endDate = parseISO(recruitmentInfo.expectedRecruitmentDuration.endDate);
    return isBefore(now, endDate) ? "모집중" : "모집 완료";
  };

  const sortProjects = (projects, sortOption) => {
    switch (sortOption) {
      case "최신순":
      case "인기순":
        return [...projects].sort((a, b) => {
          const aDate = parseISO(a.expectedProjectDuration.startDate);
          const bDate = parseISO(b.expectedProjectDuration.startDate);
          return bDate - aDate;
        });
      case "모집중":
        return projects.filter((project) => {
          const recruitmentInfoArray = Array.isArray(project.recruitmentInfo)
            ? project.recruitmentInfo
            : [project.recruitmentInfo];
          return recruitmentInfoArray.some((info) => getRecruitmentStatus(info) === "모집중");
        });
      case "모집 완료":
        return projects.filter((project) => {
          const recruitmentInfoArray = Array.isArray(project.recruitmentInfo)
            ? project.recruitmentInfo
            : [project.recruitmentInfo];
          return recruitmentInfoArray.every((info) => getRecruitmentStatus(info) === "모집 완료");
        });
      default:
        return projects;
    }
  };

  useEffect(() => {
    if (!allProjects.projectInfo) return;

    let result = allProjects.projectInfo.filter((project) => {
      const recruitmentInfoArray = Array.isArray(project.recruitmentInfo)
        ? project.recruitmentInfo
        : [project.recruitmentInfo];

      return recruitmentInfoArray.some((info) => {
        const positionMatch = !filters.position || info.position === filters.position;
        const toolsMatch =
          filters.tools.length === 0 || filters.tools.some((tool) => info.tools.some((t) => t.stackName === tool));
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
      });
    });

    result = sortProjects(result, filters.sortOption);
    setFilteredProjects(result);
  }, [filters, allProjects, setFilteredProjects]);

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
