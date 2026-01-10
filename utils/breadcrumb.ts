export function generateBreadcrumb(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    return {
      label: decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase()),
      href
    };
  });
}
