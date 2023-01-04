import { atom } from "recoil";

export const projectFilterState = atom<Filter>({
  key: "projectFilterState",
  default: "All"
});
