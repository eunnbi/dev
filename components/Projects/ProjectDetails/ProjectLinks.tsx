import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";

const ProjectLinkList = styled.ul`
  display: flex;
  gap: 1.3rem;
  a {
    display: block;
  }
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
      {github && (
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </li>
      )}
      {link && (
        <li>
          <a href={link} target="_blank" rel="noreferrer">
            <BsLink45Deg />
          </a>
        </li>
      )}
    </ProjectLinkList>
  );
};

export default ProjectLinks;
