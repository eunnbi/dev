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
    const hash = decodeURI(router.asPath.split("#")[1]);
    console.log(hash);
    if (hash) {
      setFilterIndex(categories.findIndex((element) => element === hash));
    } else {
      setFilterIndex(0);
    }
  }, [router.asPath]);

  return { filterIndex, selectFilter };
};
