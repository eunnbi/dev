export const CAREER = [
  {
    id: 1,
    title: "Sungkyunkwan University",
    content: "🎓 Bachelor of Statistics and Software",
    period: "2020.03 ~",
  },
  {
    id: 2,
    title: "J2KB 6th & MoaMoa Project",
    content: "✌️ Uni-con 2nd place",
    period: "2022.03 ~ 2022.04",
  },
  {
    id: 3,
    title: "Link Memo Project",
    content: "",
    period: "2022.06 ~ 2022.07",
  },
  {
    id: 4,
    title: "PetBook Project",
    content: "In progress 🚀",
    period: "2022.06 ~ ",
  },
  {
    id: 5,
    title: "KU hackathon - AIMECO",
    content: "🖐️ 5th place out of 18 teams",
    period: "2022.08",
  },
];

export interface ICareer {
  id: number;
  title: string;
  content: string;
  period: string;
}
