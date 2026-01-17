export interface RawLocation {
  id: number;
  name: string;
  full_name: string;
  code: string;
  level: "thanh-pho" | "tinh" | "xa" | "phuong";
  parent_code: string | null;
}

export interface Ward {
  code: string;
  name: string;
  full_name: string;
}

export interface District {
  code: string;
  name: string;
  full_name: string;
  wards: Ward[];
}

export interface Province {
  code: string;
  name: string;
  full_name: string;
  wards: Ward[]
}
