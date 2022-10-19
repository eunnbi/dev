import React, { useEffect } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
