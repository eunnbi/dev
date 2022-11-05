import { useCallback } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { MY_INFO_LINKS } from "@data/info";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";

const MyInfoLinks = () => {
  const iconPicker = useCallback((type: string) => {
    switch (type) {
      case "github":
        return <BsGithub />;
      case "email":
        return <AiOutlineMail />;
    }
  }, []);
  return (
    <Links>
      {MY_INFO_LINKS.map((link, index) => (
        <Tooltip key={index} title={link.type}>
          <IconButton href={link.link}>{iconPicker(link.type)}</IconButton>
        </Tooltip>
      ))}
    </Links>
  );
};

export default MyInfoLinks;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    color: ${({ theme }) => (theme.name === "light" ? "gray" : "white")};
    padding: 0;
  }
`;
