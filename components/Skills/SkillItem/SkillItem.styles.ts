import styled from "styled-components";
import { NextImageWrapper } from "../../common/NextImageWrapper.styled";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImageWrapper = styled(NextImageWrapper)`
  width: 20vw;
  height: 20vw;
  max-width: 100px;
  max-height: 100px;
`;

export const Heading = styled.h4`
  text-align: center;
  margin-bottom: 5px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GaugeBarWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
