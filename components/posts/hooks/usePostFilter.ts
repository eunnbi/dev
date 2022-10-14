import { useRouter } from "next/router";
import { useEffect, useCallback, useContext } from "react";
import { useRecoilState } from "recoil";
import { CategoriesContext } from "../../../context/posts/CategoriesContext";
import { postFilterIndex } from "../../../store/postFilter";

export const usePostFilter = () => {
  const router = useRouter();
  const categories = useContext(CategoriesContext);
  const [filterIndex, setFilterIndex] = useRecoilState(postFilterIndex);
  const selectFilter = useCallback((hash: string) => {
    router.push(
      {
        pathname: "/posts",
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
    if (hash === undefined) {
      setFilterIndex(0);
      return;
    }
    setFilterIndex(
      categories.findIndex((element) => element === decodeURI(hash))
    );
  }, [router.asPath]);

  return { filterIndex, selectFilter };
};
