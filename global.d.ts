interface PositionIndex {
  current: number;
  prev: number;
}

type Position = "current" | "prev" | "next";

type FilterIndex = number;

declare module "react-rotating-text";
