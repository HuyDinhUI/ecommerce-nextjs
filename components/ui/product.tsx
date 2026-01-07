import { ProductClothes } from "@/types/product.type";
import Image from "next/image";
import { Button } from "./button";
import { BiPlus } from "react-icons/bi";

type props = {
  items: ProductClothes[];
};

export const ProductList = ({
  items,
}: props) => {
  return (
    <div className={` grid grid-cols-4 gap-7 max-md:grid-cols-2`}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export const ProductItem = ({ item }: { item: ProductClothes }) => {
  const thumbnail = item.variants[0].image.find((i) => i.isThumbnail);
  const isVariants = item.variants.length > 1;

  return (
    <div>
      {thumbnail?.url ? (
        <div className="ring ring-gray-300">
          <div className="aspect-3/4 relative overflow-hidden group">
            <Image
              src={thumbnail.url}
              alt={thumbnail.alt ?? ""}
              fill
              className="object-cover"
            />
            <Button
              icon={<BiPlus />}
              className="absolute bottom-0 right-1/2 translate-x-1/2 xl:translate-y-10 xl:group-hover:translate-y-0"
            />
          </div>
        </div>
      ) : (
        <div style={{ width: 366, height: 376 }} className="bg-gray-100" />
      )}
      <div className="mt-3 font-beatrice-deck relative">
        <div className="flex gap-2 items-baseline">
          <span className="text-sm">{item.material}</span>
          {isVariants && (
            <div className="flex gap-1 items-center">
              <div
                style={{ backgroundColor: `${item.variants[0].color.code}` }}
                className={`w-3 h-3`}
              ></div>
              <span className="text-sm">+{item.variants.length - 1}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between flex-wrap">
          <p className="block font-medium max-sm:text-sm overflow-hidden text-ellipsis max-sm:max-w-30 text-nowrap">
            {item.name}
          </p>
          <span className="font-medium max-sm:text-sm max-sm">$ {item.price}</span>
        </div>
      </div>
    </div>
  );
};
