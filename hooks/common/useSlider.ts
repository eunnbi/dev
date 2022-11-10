import { useState, useEffect, useCallback } from "react";

export const useSlider = (length: number) => {
  const [position, setPosition] = useState({
    prev: length - 1,
    current: 0,
  });

  const movePrev = useCallback(() => {
    setPosition((position) => {
      const current = (position.current - 1 + length) % length;
      return {
        prev: current === 0 ? length - 1 : current - 1,
        current,
      };
    });
  }, []);

  const moveNext = useCallback(() => {
    setPosition((position) => {
      const current = (position.current + 1) % length;
      return {
        prev: current === 0 ? length - 1 : current - 1,
        current,
      };
    });
  }, []);

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
