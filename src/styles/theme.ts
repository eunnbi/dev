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
    primaryBlue: "#1976d2",
    primaryGray: "#6e6d7a",
    primaryLightGrayBlue: "#ededed",
    shadowColor: "rgba(0, 0, 0, 0.5)",
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
    primaryBlue: "#95b0e7",
    primaryGray: "#acabb3",
    primaryLightGrayBlue: "#373e47",
    shadowColor: "#000",
    cardShadowStyle: "#97a2ad 0px 0px 0px 1px, rgba(0, 0, 0, 0.4) 0px 2px 4px"
  },
  name: "dark" as const,
  device
};
