"use client";

import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
    classname?: string
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Favourite = ({ checked, onCheckedChange, classname }: Props) => {
  console.log({ checked });
  return (
    <div className={`${classname ?? ""}`}>
      <label className="cursor-pointer">
        <input
          name="v2-favourite"
          type="checkbox"
          hidden
          checked={checked}
          onChange={(e) => {
            onCheckedChange(e.target.checked);
          }}
        />

        <div className="bg-white w-8 h-8 flex items-center justify-center p-2">
          {checked ? <IoHeart color="white" /> : <IoHeartOutline />}
        </div>
      </label>
    </div>
  );
};
