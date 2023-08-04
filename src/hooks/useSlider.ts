import { useState, useEffect } from "react";

export const useSlider = (length: number) => {
  const [positionIndex, setPositionIndex] = useState({
    prev: length - 1,
    current: 0
  });

  const movePrev = () => {
    setPositionIndex(position => {
      const current = (position.current - 1 + length) % length;
      return {
        prev: current === 0 ? length - 1 : current - 1,
        current
      };
    });
  }

  const moveNext = () => {
    setPositionIndex(position => {
      const current = (position.current + 1) % length;
      return {
        prev: current === 0 ? length - 1 : current - 1,
        current
      };
    });
  };

  useEffect(() => {
    let timeId = setInterval(() => moveNext(), 5000);
    return () => clearInterval(timeId);
  }, [positionIndex]);

  return {
    positionIndex,
    movePrev,
    moveNext
  };
};
