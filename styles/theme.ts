const color = {
  lightPurple: "#dcc9fc",
  darkPurple: "#6b4ba3",
  purple: "#936aa7",
};

const deviceSizes = {
  smallMobile: "300px",
  mobile: "500px",
  tablet: "900px",
  laptop: "1050px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  smallMobile: `screen and (max-width: ${deviceSizes.smallMobile})`,
};

export const lightTheme = {
  color: {
    bgColor: "#fff",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    tabTextColor: "#6e6d7a",
    tabHoverTextColor: "#0d0c22",
    tabSelectedBgColor: "rgba(13, 12, 34, 0.05)",
    chipBgColor: "#f3f3f4",
  },
  name: "light" as const,
  device,
};

export const darkTheme = {
  color: {
    bgColor: "#252525",
    textColor: "#fff",
    shadowColor: "#000",
    tabTextColor: "#768390",
    tabHoverTextColor: "#acbac7",
    tabSelectedBgColor: "#373e47",
    chipBgColor: "#323a42",
  },
  name: "dark" as const,
  device,
};
