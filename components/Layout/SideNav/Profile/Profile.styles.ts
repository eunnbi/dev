import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 17vmin;
  height: 17vmin;
  border: 2px solid #fff;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.3);
  img {
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3.5rem;
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
