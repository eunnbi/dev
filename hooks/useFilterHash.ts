import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const useFilterHash = (FILTERS: string[], basePath: string) => {
  const router = useRouter();
  const [filter, setFilter] = useState(FILTERS[0]);
  const selectFilter = (hash: string) => {
    router.push({
      pathname: basePath,
      hash,
    });
  };

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      setFilter(hash);
    } else {
      setFilter(FILTERS[0]);
    }
  }, [router.asPath]);

  return { filter, selectFilter };
};
