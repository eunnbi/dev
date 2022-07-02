import { CONTACT_LINKS } from "./contactLinks";
import { List, Anchor } from "./ContactLinks.styles";

const ContactLinks = () => {
  return (
    <List>
      {CONTACT_LINKS.map((link) => (
        <li key={link.id}>
          <Anchor href={link.to} target="_blank" rel="noreferrer">
            {link.icon}
          </Anchor>
        </li>
      ))}
    </List>
  );
};

export default ContactLinks;
