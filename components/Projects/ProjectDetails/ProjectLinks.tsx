import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectLinkList = styled.ul`
  display: flex;
`;

const ProjectLink = styled.a`
  display: block;
  margin: 0 1.3rem 0 0;
  svg {
    font-size: 1.8rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: blueviolet;
    }
  }
`;

interface ProjectLinksProps {
  github: string;
  link: string;
}

const ProjectLinks = ({ github, link }: ProjectLinksProps) => {
  return (
    <ProjectLinkList>
      <li>
        <ProjectLink href={github} target="_blank" rel="noreferrer">
          <BsGithub />
        </ProjectLink>
      </li>
      <li>
        <ProjectLink href={link} target="_blank" rel="noreferrer">
          <BsLink45Deg />
        </ProjectLink>
      </li>
    </ProjectLinkList>
  );
};

export default ProjectLinks;
