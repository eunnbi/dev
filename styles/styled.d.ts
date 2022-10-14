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
      tabHoverTextColor: string;
      tabSelectedBgColor: string;
      chipBgColor: string;
    };
    name: "light" | "dark";
  }
}
