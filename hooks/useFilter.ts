import { postFilterState } from "@stores/postFilterState";
import { projectFilterState } from "@stores/projectFilterState";
import { useRecoilValue } from "recoil";

export const useProjectFilter = () => {
  return useRecoilValue(projectFilterState);
};

export const usePostFilter = () => {
  return useRecoilValue(postFilterState);
};
