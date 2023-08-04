import styled, { css } from "styled-components";

interface SkeletonProps {
  width: string;
  height: string;
  style?: React.CSSProperties;
}

export default function Skeleton({ width, height, style }: SkeletonProps) {
  return <Box $width={width} $height={height} style={style} />;
}

const Box = styled.div<{
  $width: string;
  $height: string;
}>`
  ${({ $width, $height }) => css`
    width: ${$width};
    height: ${$height};
  `}
  background-color: rgb(229 231 235);
  border-radius: 8px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
