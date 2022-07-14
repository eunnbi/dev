const today = new Date();
const year = today.getFullYear();
const age = year - 2001 + 1;

export const MY_INFO = [
  {
    label: "Name",
    value: "강은비 (Eunbi Kang)",
    link: "",
  },
  {
    label: "Age",
    value: age.toString(),
    link: "",
  },
  {
    label: "Address",
    value: "Suwon-si, Gyeonggi-do",
    link: "",
  },
  {
    label: "E-mail",
    value: "jenabill@naver.com",
    link: "mailto:jenabill@naver.com",
  },
  {
    label: "Phone",
    value: "010-9605-0109",
    link: "",
  },
  {
    label: "Github",
    value: "https://github.com/eunnbi",
    link: "https://github.com/eunnbi",
  },
  {
    label: "Dev Blog",
    value: "@eunnbi.log",
    link: "https://velog.io/@eunnbi",
  },
];
