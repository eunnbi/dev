import { atom } from "recoil";

export const postFilterState = atom<FilterIndex>({
  key: "postFilterState",
  default: 0
});
