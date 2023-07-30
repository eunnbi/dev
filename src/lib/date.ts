const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const convertDateFormat = (postDate: string) => {
  const [year, month, date] = postDate.split("-");
  return `${MONTHS[Number(month) - 1]} ${date.padStart(2, "0")}, ${year}`;
};
