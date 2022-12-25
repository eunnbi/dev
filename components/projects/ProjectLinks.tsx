import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectLinks = ({ links }: Pick<Project, "links">) => {
  const { github, siteUrl } = links;
  return (
    <Links>
      {github && (
        <li>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="깃허브 링크"
          >
            <BsGithub />
          </a>
        </li>
      )}
      {siteUrl && (
        <li>
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="배포 사이트 링크"
          >
            <BsLink45Deg />
          </a>
        </li>
      )}
    </Links>
  );
};

const Links = styled.ul`
  display: flex;
  gap: 1.3rem;
  a {
    display: block;
  }
  svg {
    font-size: 1.5rem;
    color: #a8a8a8;
  }
`;

export default ProjectLinks;
