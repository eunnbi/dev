import styled from "styled-components";
import { CONTACT_LINKS } from "./contactLinks";

const ContactLinkList = styled.ul`
  display: flex;
  color: #fff;
  font-size: 30px;
  position: absolute;
  bottom: 50px;

  .icon {
    margin: 0 10px;
  }
`;

const Anchor = styled.a`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: blueviolet;
  }
`;

const ContactLinks = () => {
  return (
    <ContactLinkList>
      {CONTACT_LINKS.map((link) => (
        <li key={link.id}>
          <Anchor href={link.to} target="_blank" rel="noreferrer">
            {link.icon}
          </Anchor>
        </li>
      ))}
    </ContactLinkList>
  );
};

export default ContactLinks;
