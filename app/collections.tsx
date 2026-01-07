"use client";

import { ProductList } from "@/components/ui/product";
import { useState } from "react";
import { DATA_CLOTHES_MOCK } from "./mock/products.mock";

const GENDERS = ["All", "Men", "Women", "Unisex"];

const CollectionsList = () => {
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
        <div>
            <ProductList items={DATA_CLOTHES_MOCK} perView={3}/>
        </div>
      </div>
    </>
  );
};

export default CollectionsList;
