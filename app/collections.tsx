"use client";

import { ProductList } from "@/components/product/product-list";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { ProductClothes } from "@/types/product.type";

const GENDERS = ["All", "Men", "Women", "Unisex"];

const CollectionsList = ({data}: {data:ProductClothes[]}) => {
  const [gender, setGender] = useState<string>("All");
  return (
    <>
      <div>
        <div className="flex gap-10">
          {GENDERS.map((o, i) => (
            <span
              key={i}
              className={`text-sm ${o === gender ? "font-bold" : "text-gray-500"}`}
              onClick={() => setGender(o)}
            >
              {o === gender ? `(${o})` : o}
            </span>
          ))}
        </div>
        <hr className="border-gray-300 mt-3"/>
        <div className="mt-5">
            <ProductList items={data}/>
            <div className="flex justify-center cursor-pointer mt-5">
                <div className="flex flex-col items-center">
                    <span className="text-[10px]/3">More</span>
                    <IoChevronDown/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsList;
