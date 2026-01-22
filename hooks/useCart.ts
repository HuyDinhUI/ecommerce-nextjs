import { toast } from "@/components/ui/toast";
import { CartService } from "@/services/cart-service";
import { useCartStore } from "@/store/cart.store";
import { CartItem, UpdateVariantType } from "@/types/cart.type";
import { useMutation } from "@tanstack/react-query";

const useCart = () => {

  const {
    addItem,
    removeItem,
    updateQuantity,
    updateVariant,
    snapshot,
    restore,
  } = useCartStore();

  const addCartMutation = useMutation({
    mutationFn: CartService.add,
  });

  const removeCartMutation = useMutation({
    mutationFn: CartService.remove,
  });

  const updateColorMutation = useMutation({
    mutationFn: CartService.updateColor,
  });

  const updateSizeMutation = useMutation({
    mutationFn: CartService.updateSize,
  });

  const updateQuantityMutation = useMutation({
    mutationFn: CartService.updateQuantity,
  });

  const handleAddToCart = (cartItem: CartItem) => {
    const prev = snapshot();

    addItem(cartItem);

    addCartMutation.mutate(cartItem, {
      onSuccess: () => {
        toast.success("Item has been added to cart.")
      },
      onError: () => {
        restore(prev);
      },
    });
  };

  const handleRemoveCart = (sku: string) => {
    const prev = snapshot();

    removeItem(sku);

    removeCartMutation.mutate(sku, {
      onError: () => {
        restore(prev);
      },
    });
  };

  const handleUpdateColor = (payload: UpdateVariantType) => {
    const prev = snapshot();

    updateVariant(payload);

    updateColorMutation.mutate(
      {
        productId: payload.productId,
        sku: payload.newSku,
        color: payload.newVariant.color.code,
      },
      {
        onError: () => {
          restore(prev);

        },
      }
    );
  };

  const handleUpdateSize = (payload: UpdateVariantType) => {
    const prev = snapshot();

    updateVariant(payload);

    updateSizeMutation.mutate(
      {
        productId: payload.productId,
        sku: payload.newSku,
      },
      {
        onError: () => {
          restore(prev);

        },
      }
    );
  };

  const handleUpdateQuantity = (quantity: number, cartItem: CartItem) => {
    const prev = snapshot();
    updateQuantity(cartItem.sku, quantity);
    updateQuantityMutation.mutate(
      {
        productId: cartItem.productId,
        sku: cartItem.sku,
        quantity: quantity,
      },
      {
        onError: () => {
          restore(prev);

        },
      }
    );
  };

  return {
    handleAddToCart,
    handleRemoveCart,
    handleUpdateColor,
    handleUpdateSize,
    handleUpdateQuantity,
    loading:
      addCartMutation.isPending ||
      removeCartMutation.isPending ||
      updateColorMutation.isPending ||
      updateSizeMutation.isPending ||
      updateQuantityMutation.isPending,
  };
};

export default useCart;
