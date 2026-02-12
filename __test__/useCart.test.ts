import useCart from "@/hooks/useCart";
import ClientProvider from "@/providers/client.provider";
import { CartItem } from "@/types/cart.type";
import { Size } from "@/types/product.type";
import { act, renderHook } from "@testing-library/react";

describe("test useCart hook", () => {
  it("add to cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: ClientProvider,
    });
    const cartItem: CartItem = {
      id: "1",
      productId: "prod-1",
      productSizeId: "size-1",
      sku: "sku-1",
      attribute: {
        color: {
          colorName: "Red",
          colorCode: "#FF0000",
        },
        size: Size.L,
      },
      name: "Test Product",
      slug: "test-product",
      image: "test-image.jpg",
      material: "Cotton",
      price: 29.99,
      quantity: 1,
    };

    await act(async () => {
        await result.current.handleAddToCart(cartItem);
    })
  });
});
