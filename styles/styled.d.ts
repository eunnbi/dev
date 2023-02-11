import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      smallMobile: string;
      mobile: string;
      tablet: string;
      laptop: string;
    };
    color: {
      bgColor: string;
      textColor: string;
      shadowColor: string;
      tabTextColor: string;
      tabSelectedBgColor: string;
      chipBgColor: string;
      speechBubbleBg: string;
      cardShadowStyle: string;
    };
    name: "light" | "dark";
  }
}
