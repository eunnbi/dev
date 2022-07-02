import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 20vmin;
  height: 20vmin;
  border-radius: 50%;
  box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.3);
  border: 2px solid #fff;
  background-color: #fff;
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 4rem;
  text-align: center;
  margin: 10px 0;
  letter-spacing: 1px;
  font-family: Sail;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000; ;
`;

export const Text = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
`;
