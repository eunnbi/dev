import { postFilterState } from "@stores/postFilterState";
import { projectFilterState } from "@stores/projectFilterState";
import { useRecoilValue } from "recoil";

export const useProjectFilterIndex = () => {
  const filterIndex = useRecoilValue(projectFilterState);
  return filterIndex;
};

export const usePostFilterIndex = () => {
  const filterIndex = useRecoilValue(postFilterState);
  return filterIndex;
};
