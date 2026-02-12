export const slugtify = (val: string) => {
  if (!val) return "";
  return val
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const descriptionShippingMethod = (
  estimateDaysMin: number,
  estimateDaysMax: number,
) => {
  return estimateDaysMin + " - " + estimateDaysMax + " business days";
};

export const formatPath = (url: string) => {
  const findIndex = url.indexOf("?");
  if (findIndex === -1) return url;
  return url.slice(0, findIndex);
}
