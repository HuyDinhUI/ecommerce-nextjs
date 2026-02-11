export const parseArray = (value: string | null) =>
  value ? value.split(",").filter(Boolean) : [];
