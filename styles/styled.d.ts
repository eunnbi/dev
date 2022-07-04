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
      lightPurple: string;

      darkPurple: string;
      purple: string;
    };
  }
}
