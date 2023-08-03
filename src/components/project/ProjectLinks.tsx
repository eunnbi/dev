import Link from "next/link";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectLinks = ({ links }: Pick<Project, "links">) => {
  const { github, siteUrl } = links;
  return (
    <Box>
      {github && (
        <Link
          href={github}
          target="_blank"
          rel="noreferrrer"
          aria-label="깃허브 링크"
        >
          <BsGithub />
        </Link>
      )}
      {siteUrl && (
        <Link
          href={siteUrl}
          target="_blank"
          rel="noreferrrer"
          aria-label="배포 사이트 링크"
        >
          <BsLink45Deg />
        </Link>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  svg {
    font-size: 1.5rem;
    color: #7d7d7d;
  }
`;

export default ProjectLinks;
