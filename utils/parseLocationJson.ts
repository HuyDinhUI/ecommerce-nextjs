import { Province, RawLocation } from "@/types/vietnam.type";

export function parseVnLocations(data: RawLocation[]): Province[] {
  const provinces = data.filter((i) => i.level === "thanh-pho" || i.level === "tinh");

  const wards = data.filter(
    (i) => i.level === "xa" || i.level === "phuong"
  );

  return provinces.map((province) => {
    const xa = wards
      .filter((d) => d.parent_code === province.code)
      .map((district) => {
        return {
          code: district.code,
          name: district.name,
          full_name: district.full_name,
        };
      });

    return {
      code: province.code,
      name: province.name,
      full_name: province.full_name,
      wards: xa
    };
  });
}
