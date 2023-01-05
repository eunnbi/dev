import { atom } from "recoil";

export const postFilterState = atom<Filter>({
  key: "postFilterState",
  default: "All"
});
