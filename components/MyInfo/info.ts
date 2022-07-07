const today = new Date();
const year = today.getFullYear();
const age = year - 2001 + 1;

export const MY_INFO = [
  {
    label: "Name",
    value: "강은비 (Eunbi Kang)",
  },
  {
    label: "Age",
    value: age.toString(),
  },
  {
    label: "Address",
    value: "Suwon-si, Gyeonggi-do",
  },
  {
    label: "E-mail",
    value: "jenabill@naver.com",
  },
  {
    label: "Phone",
    value: "010-9605-0109",
  },
];
