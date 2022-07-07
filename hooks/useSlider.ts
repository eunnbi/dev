import { useState, useEffect } from "react";

export const useSilder = (length: number) => {
  const [position, setPosition] = useState({
    prev: length - 1,
    current: 0,
  });

  const movePrev = () => {
    const current = (position.current - 1 + length) % length;
    setPosition({
      prev: current === 0 ? length - 1 : current - 1,
      current,
    });
  };

  const moveNext = () => {
    const current = (position.current + 1) % length;
    setPosition({
      prev: current === 0 ? length - 1 : current - 1,
      current,
    });
  };

  useEffect(() => {
    let timeId = setInterval(() => moveNext(), 5000);
    return () => clearInterval(timeId);
  }, [position]);

  return {
    position,
    movePrev,
    moveNext,
  };
};
