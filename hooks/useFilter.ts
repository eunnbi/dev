import { useRouter } from "next/router";
import { useCallback } from "react";

interface Params {
  FILTERS: string[];
  basePath: string;
}

export const useFilterIndex = (FILTERS: string[]) => {
  const router = useRouter();
  const filter = router.query.filter;
  const filterIndex = filter
    ? FILTERS.findIndex(element => element === filter)
    : 0;
  return filterIndex;
};

export const useChangeFilter = (basePath: string) => {
  const router = useRouter();
  const selectFilter = useCallback((filter: string) => {
    router.push(`${basePath}?filter=${filter}`, undefined, {
      shallow: true
    });
  }, []);

  return selectFilter;
};
