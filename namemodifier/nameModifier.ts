export const getDisplayName = (name: string) => {
  const normalized = name.trim().toLowerCase();
  if (normalized === "yx1 wireless earphones") {
    return "YX1";
  }
  return name;
};
