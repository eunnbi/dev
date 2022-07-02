import { useState } from "react";

export const useToggle = (
  initialState: boolean
): [boolean, () => void, () => void] => {
  const [toggle, setToggle] = useState(initialState);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onClose = () => {
    setToggle(false);
  };

  return [toggle, onToggle, onClose];
};
