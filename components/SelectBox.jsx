"use client";
import PositionSelect from "./PositionSelect";
import ToolSelect from "./ToolSelect";
import ProjectDurationSelect from "./ProjectDurationSelect";
import SortSelect from "./SortSelect";
import CreateProject from "./CreateProject";

const SelectBox = () => {
  return (
    <div className="flex justify-start items-center gap-8">
      <PositionSelect />
      <ToolSelect />
      <ProjectDurationSelect />
      <SortSelect />
      <CreateProject />
    </div>
  );
};

export default SelectBox;
