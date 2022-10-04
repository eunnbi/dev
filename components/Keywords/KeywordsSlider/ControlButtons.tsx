import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React from "react";

interface ControlButtonsProps {
  movePrev: () => void;
  moveNext: () => void;
}

const ControlButtons = ({ moveNext, movePrev }: ControlButtonsProps) => {
  return (
    <div>
      <FiChevronLeft onClick={movePrev} />
      <FiChevronRight onClick={moveNext} />
    </div>
  );
};

export default React.memo(ControlButtons);
