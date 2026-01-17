import { Province } from "@/types/vietnam.type";

type SelectOption = {
    label: string
    value: string
}

export function buildDropdownMaps(provinces: Province[]) {
  const provinceOptions: SelectOption[] = [];
  const wardMap = new Map<string, SelectOption[]>();

  provinces.forEach((p) => {
    provinceOptions.push({
      label: p.full_name,
      value: p.code,
    });

    wardMap.set(
      p.code,
      p.wards.map((d) => ({
        label: d.full_name,
        value: d.code,
      }))
    );
  });

  return {
    provinceOptions,
    wardMap,
  };
}
