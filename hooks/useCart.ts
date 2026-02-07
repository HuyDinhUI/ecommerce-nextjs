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
    clearCart,
    syncCartItemId,
  } = useCartStore();

  const addCartMutation = useMutation({
    mutationFn: CartService.add,
  });

  const removeCartMutation = useMutation({
    mutationFn: CartService.remove,
  });

  const updateColorMutation = useMutation({
    mutationFn: CartService.updateVariant,
  });

  const updateSizeMutation = useMutation({
    mutationFn: CartService.updateVariant,
  });

  const updateQuantityMutation = useMutation({
    mutationFn: CartService.updateQuantity,
  });

  const mergeCartMutation = useMutation({
    mutationFn: CartService.mergeCart,
  });

  const getProductIdsByCart = (cartItems: CartItem[]) => {
    return [...new Set(cartItems.map((i) => i.productId))];
  }

  const handleAddToCart = (cartItem: CartItem) => {
    const prev = snapshot();

    addItem(cartItem);

    addCartMutation.mutate(cartItem, {
      onSuccess: (v) => {
        syncCartItemId(cartItem.id, v.payload.data.id);
        toast.success("Item has been added to cart.");
      },
      onError: () => {
        restore(prev);
      },
    });
  };

  const handleRemoveCart = (id: string) => {
    const prev = snapshot();

    removeItem(id);

    removeCartMutation.mutate(id, {
      onError: () => {
        restore(prev);
      },
    });
  };

  const handleUpdateColor = (payload: UpdateVariantType, id: string) => {
    const prev = snapshot();

    updateVariant(payload);

    updateColorMutation.mutate(
      {
        id,
        sku: payload.newSku,
      },
      {
        onError: () => {
          restore(prev);
        },
      },
    );
  };

  const handleUpdateSize = (payload: UpdateVariantType, id: string) => {
    const prev = snapshot();

    updateVariant(payload);

    updateSizeMutation.mutate(
      {
        id,
        sku: payload.newSku,
      },
      {
        onError: () => {
          restore(prev);
        },
      },
    );
  };

  const handleUpdateQuantity = (quantity: number, cartItem: CartItem) => {
    const prev = snapshot();
    updateQuantity(cartItem.sku, quantity);
    updateQuantityMutation.mutate(
      { quantity, id: cartItem.id },
      {
        onError: () => {
          restore(prev);
        },
      },
    );
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleMergeCart = () => {
    mergeCartMutation.mutateAsync();
  };

  return {
    getProductIdsByCart,
    handleAddToCart,
    handleRemoveCart,
    handleUpdateColor,
    handleUpdateSize,
    handleUpdateQuantity,
    handleClearCart,
    handleMergeCart,
    loading:
      addCartMutation.isPending ||
      removeCartMutation.isPending ||
      updateColorMutation.isPending ||
      updateSizeMutation.isPending ||
      updateQuantityMutation.isPending ||
      mergeCartMutation.isPending,
  };
};

export default useCart;
