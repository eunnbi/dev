"use client";

import { cloneElement, isValidElement, useEffect, useRef } from "react";

interface OnClickOutsideProps {
  trigger: () => void;
}

export default function OnClickOutside({
  trigger,
  children
}: React.PropsWithChildren<OnClickOutsideProps>) {
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
        ref
      })
    : null;
}
