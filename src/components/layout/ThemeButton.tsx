"use client";

import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "@/hooks/useTheme";
import styled from "styled-components";
import React from "react";

export default function ThemeButton() {
  const { isLightTheme, changeTheme } = useTheme();
  return (
    <Button
      onClick={changeTheme}
      type="button"
      aria-label="다크 테마, 라이트 테마 바꾸는 버튼"
    >
      {isLightTheme ? <IoSunny /> : <IoMoon />}
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 5;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #363f47;
  svg {
    font-size: 2rem;
    color: white;
  }
`;
