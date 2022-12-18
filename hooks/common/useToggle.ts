import { useCallback, useState } from "react";

export const useToggle = (
  initialState: boolean
): [boolean, () => void, () => void] => {
  const [toggle, setToggle] = useState(initialState);

  const onToggle = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);

  const onClose = useCallback(() => {
    setToggle(false);
  }, []);

  return [toggle, onToggle, onClose];
};
