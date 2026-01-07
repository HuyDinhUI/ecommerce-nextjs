import { ProductClothes } from "@/types/product";
import Image from "next/image";

type props = {
  items: ProductClothes[];
  perView: number;
};

export const ProductList = ({ items, perView = 3 }: props) => {
  return (
    <div className={`flex justify-between`}>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export const ProductItem = ({ item }: { item: ProductClothes }) => {
  const thumbnail = item.variants[0].image.find((i) => i.isThumbnail);

  return (
    <div>
      {thumbnail?.url ? (
        <Image
          src={thumbnail.url}
          width={450}
          height={376}
          alt={thumbnail.alt ?? ""}
        />
      ) : (
        <div style={{ width: 366, height: 376 }} className="bg-gray-100" />
      )}
    </div>
  );
};
