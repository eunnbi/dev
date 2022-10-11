import { BsLink45Deg, BsGithub } from "react-icons/bs";
import styled from "styled-components";

interface ProjectLinksProps {
  github: string;
  link: string;
}

const ProjectLinks = ({ github, link }: ProjectLinksProps) => {
  return (
    <Links>
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
    </Links>
  );
};

export default ProjectLinks;

const Links = styled.ul`
  display: flex;
  gap: 1.3rem;
  a {
    display: block;
  }
  svg {
    font-size: 1.5rem;
    color: gray;
  }
`;
