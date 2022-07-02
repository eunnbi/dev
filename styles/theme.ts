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

const theme = {
  device,
  color,
};

export default theme;
