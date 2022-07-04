import React, { createContext, useCallback, useState } from "react";

export interface Modal {
  Component: (props: any) => JSX.Element;
  props: object;
}

export const ModalsStateContext = createContext([] as Modal[]);

export const ModalsDispatchContext = createContext({
  openModal: (Component: (props: any) => JSX.Element, props: object) => {},
  closeModal: (Component: (props: any) => JSX.Element) => {},
});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedModals, setOpendModals] = useState([] as Modal[]);
  const openModal = useCallback(
    (Component: (props: any) => JSX.Element, props: object) => {
      setOpendModals((modals: Modal[]) => {
        return [...modals, { Component, props }];
      });
    },
    []
  );

  const closeModal = useCallback((Component: (props: any) => JSX.Element) => {
    setOpendModals((modals: Modal[]) => {
      return modals.filter((modal: Modal) => modal.Component !== Component);
    });
  }, []);

  const dispatch = { openModal, closeModal };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
