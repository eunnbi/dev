import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

export const Modal = styled.section`
  background-color: #fff;
  padding: 2rem;
  position: relative;
  max-width: 1500px;
  width: 90vw;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  gap: 3rem;
  h2 {
    text-align: center;
    font-size: 1.7rem;
  }
`;
