interface PositionIndex {
  current: number;
  prev: number;
}

type Position = "current" | "prev" | "next";

type Filter = string;

declare module "react-rotating-text";
