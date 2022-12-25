import { IconButton, Tooltip } from "@mui/material";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectLinks = ({ links }: Pick<Project, "links">) => {
  const { github, siteUrl } = links;
  return (
    <Box>
      {github && (
        <Tooltip title="github">
          <IconButton
            href={github}
            target="_blank"
            rel="noreferrrer"
            aria-label="깃허브 링크"
          >
            <BsGithub />
          </IconButton>
        </Tooltip>
      )}
      {siteUrl && (
        <Tooltip title="website">
          <IconButton
            href={siteUrl}
            target="_blank"
            rel="noreferrrer"
            aria-label="배포 사이트 링크"
          >
            <BsLink45Deg />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  svg {
    font-size: 1.5rem;
    color: #a8a8a8;
  }
`;

export default ProjectLinks;
