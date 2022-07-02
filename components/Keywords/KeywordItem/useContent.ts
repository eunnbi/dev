import { useState, useEffect } from "react";

export const useContent = (ref: React.RefObject<HTMLLIElement>) => {
  const [show, setShow] = useState(false);
  const handleShowContent = () => {
    setShow(true);
  };
  const handleCloseContent = () => {
    setShow(false);
  };
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return {
    show,
    handleShowContent,
    handleCloseContent,
  };
};
