export function toggleFilterValue(
  params: URLSearchParams,
  key: string,
  value: string
) {
  const current = params.get(key);
  const values = current ? current.split(",") : [];

  const exists = values.includes(value);

  const nextValues = exists
    ? values.filter(v => v !== value)
    : [...values, value];

  if (nextValues.length === 0) {
    params.delete(key);
  } else {
    params.set(key, nextValues.join(","));
  }

  return params;
}
