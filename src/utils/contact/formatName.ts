export const formatName = (firsName: string, lastName: string) => {
  return `${firsName} ${lastName.substring(0, 1)}${lastName.length > 1 ? "." : ""}`;
};
