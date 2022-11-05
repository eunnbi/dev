import { atom } from "recoil";

export const projectFilterState = atom<FilterIndex>({
  key: "projectFilterState",
  default: 0
});
