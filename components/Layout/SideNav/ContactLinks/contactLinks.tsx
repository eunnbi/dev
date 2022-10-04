import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const CONTACT_LINKS = [
  {
    id: 1,
    to: "https://github.com/eunnbi",
    icon: <BsGithub className="icon" />,
  },
  {
    id: 2,
    to: "https://velog.io/@eunnbi",
    icon: <BsLink45Deg className="icon" />,
  },
  {
    id: 3,
    to: "mailto:jenabill@naver.com",
    icon: <AiOutlineMail className="icon" />,
  },
];
