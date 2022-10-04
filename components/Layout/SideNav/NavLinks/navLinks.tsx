import {
  IoHomeOutline,
  IoPersonOutline,
  IoBookmarksOutline,
} from "react-icons/io5";

export const NAV_LINKS = [
  {
    id: 1,
    to: "/",
    label: "Home",
    icon: <IoHomeOutline className="icon" />,
  },
  {
    id: 2,
    to: "/about",
    label: "About",
    icon: <IoPersonOutline className="icon" />,
  },
  {
    id: 3,
    to: "/projects",
    label: "Projects",
    icon: <IoBookmarksOutline className="icon" />,
  },
];
