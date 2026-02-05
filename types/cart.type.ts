import { Size } from "./product.type";

export interface CartItem {
  productId: string;
  sku: string;

  attribute: {
    color: {
      colorName: string;
      colorCode: string;
    };
    size: Size;
  };

  name: string;
  slug: string;
  image: string;
  material: string;
  price: number;
  quantity: number;
}

export interface Cart {
  CartItem: CartItem[];
  totalQuantity: number;
  subtotal: number;
}

export interface UpdateVariantType {
  productId: string;
  oldSku: string;
  newSku: string;
  newPrice: number;
  newImage: string;
  newVariant: {
    color: {
      colorName: string;
      colorCode: string;
    };
    size: Size;
  };
}
