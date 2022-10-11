import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

export const useFilterHash = (FILTERS: string[], basePath: string) => {
  const router = useRouter();
  const [filterIndex, setFilter] = useState(0);
  const selectFilter = useCallback((hash: string) => {
    router.push(
      {
        pathname: basePath,
        hash,
      },
      undefined,
      {
        shallow: true,
      }
    );
  }, []);

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      setFilter(FILTERS.findIndex((element) => element === hash));
    } else {
      setFilter(0);
    }
  }, [router.asPath]);

  return { filterIndex, selectFilter };
};
