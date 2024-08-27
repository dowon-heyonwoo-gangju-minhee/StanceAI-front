import { allProjects } from "@/data/allProjects";
import { atom } from "recoil";

export const atomIsOpenToolSelected = atom({
  key: "isOpenToolSelected",
  default: false,
});

export const atomFilterLists = atom({
  key: "filterList",
  default: allProjects.projectInfo,
});
