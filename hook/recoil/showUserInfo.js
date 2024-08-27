import { atom } from "recoil";

export const atomIsShowUserInfo = atom({
  key: "isShowUserInfo",
  default: false,
});

export const atomUserLoginInfo = atom({
  key: "userLoginInfo",
  default: null,
});
