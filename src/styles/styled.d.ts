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
      primaryBlue: string;
      primaryGray: string;
      primaryLightGrayBlue: string;
      shadowColor: string;
      cardShadowStyle: string;
    };
    name: "light" | "dark";
  }
}
