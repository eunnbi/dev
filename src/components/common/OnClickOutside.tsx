import React, { cloneElement, isValidElement, useEffect, useRef } from "react";

interface Props {
  trigger: () => void;
}
const OnClickOutside = ({
  trigger,
  children,
}: React.PropsWithChildren<Props>) => {
  const ref = useRef<HTMLElement | null>(null);
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      trigger();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return isValidElement(children)
    ? cloneElement(children as any, {
        ref,
      })
    : null;
};

export default OnClickOutside;