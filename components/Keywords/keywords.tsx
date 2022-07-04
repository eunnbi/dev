import {
  HiOutlineDesktopComputer,
  HiOutlineUserCircle,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { MdMessage } from "react-icons/md";

export const KEYWORDS = [
  {
    id: 1,
    title: "Frontend",
    contents: [
      "현재 Frontend 개발을 하고 있으며, ReactJS 라이브러리와 NextJS 프레임워크를 주로 다루고 있습니다.",
      "최근에는 React Native에 관심이 생겨, 추후에 React Native를 이용하여 앱 개발에 도전할 것입니다.",
    ],
    icon: "🖥️  ",
  },
  {
    id: 2,
    title: "User Experience",
    contents: [
      "사용자 경험이 좋은 웹을 만들려고 노력하고 있습니다.",
      "프로젝트를 진행할 때 사용자 입장을 우선적으로 생각해 의견을 말하는 편입니다.",
      "처음 쓰는 앱이라도 평소에 쓰던 것처럼 쉽게 사용할 수 있도록 UX가 좋은 앱을 만들겠습니다.",
    ],
    icon: "👥  ",
  },
  {
    id: 3,
    title: "Communication",
    contents: [
      "프론트엔드 개발자는 기획자, 백엔드 개발자, 디자이너 다양한 분야의 사람들과 협업합니다.",
      "상대방이 내 분야를 잘 모를 수 있다는 것을 인지하여 원활하게 소통이 이루어지도록 합니다.",
      "저 또한 상대방의 분야를 잘 모른다는 것을 인정하고 경청합니다.`,",
    ],
    icon: "📢 ",
  },
  {
    id: 4,
    title: "Question",
    contents: [],
    icon: "🤔  ",
  },
];

export type KeywordType = typeof KEYWORDS[0];
