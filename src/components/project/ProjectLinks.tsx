import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";
import IconLink from "../common/IconLink";

const ProjectLinks = ({ links }: Pick<Project, "links">) => {
  const { github, siteUrl } = links;
  return (
    <LinkBox>
      {github && (
        <IconLink href={github} aria-label="깃허브 링크">
          <BsGithub className="icon" />
        </IconLink>
      )}
      {siteUrl && (
        <IconLink href={siteUrl} aria-label="배포 사이트 링크">
          <BsLink45Deg className="icon" />
        </IconLink>
      )}
    </LinkBox>
  );
};

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  .icon {
    font-size: 1.5rem;
    color: #7d7d7d;
  }
`;

export default ProjectLinks;
