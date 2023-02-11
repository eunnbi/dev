const color = {
  lightPurple: "#dcc9fc",
  darkPurple: "#6b4ba3",
  purple: "#936aa7"
};

const deviceSizes = {
  smallMobile: "300px",
  mobile: "500px",
  tablet: "900px",
  laptop: "1050px"
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  smallMobile: `screen and (max-width: ${deviceSizes.smallMobile})`
};

export const lightTheme = {
  color: {
    bgColor: "#fff",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    tabSelectedBgColor: "#ededed",
    chipBgColor: "#f3f3f4",
    tabTextColor: "#6e6d7a",
    speechBubbleBg: "black",
    cardShadowStyle:
      "rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px"
  },
  name: "light" as const,
  device
};

export const darkTheme = {
  color: {
    bgColor: "#252525",
    textColor: "#fff",
    shadowColor: "#000",
    tabSelectedBgColor: "#373e47",
    chipBgColor: "#323a42",
    tabTextColor: "#97a2ad",
    speechBubbleBg: "#373e47",
    cardShadowStyle: "#97a2ad 0px 0px 0px 1px, #000 0px 2px 4px"
  },
  name: "dark" as const,
  device
};
