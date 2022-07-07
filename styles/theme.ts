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
    ...color,
    bgColor: "#fff",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    violet: "blueviolet",
    navColor: "#936aa7",
  },
  name: "light",
  device,
};

export const darkTheme = {
  color: {
    ...color,
    bgColor: "#252525",
    textColor: "#fff",
    shadowColor: "#000",
    violet: "#D391FA",
    navColor: "#623775",
  },
  name: "dark",
  device,
};
