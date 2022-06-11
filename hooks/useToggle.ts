import { useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);

  const setToggle = () => {
    setState(!state);
  };

  return {
    toggle: state,
    setToggle,
  };
};
