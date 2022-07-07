import { useContext } from "react";
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from "../../context/ModalsContext";
const Modals = () => {
  const opendModals = useContext(ModalsStateContext);
  const { closeModal } = useContext(ModalsDispatchContext);
  return (
    <>
      {opendModals.length !== 0 &&
        opendModals.map((modal, index) => {
          const { Component, props } = modal;
          const onClose = () => closeModal(Component);
          return <Component key={index} {...props} onClose={onClose} />;
        })}
    </>
  );
};

export default Modals;
