import { CartService } from "@/services/cart-service";
import { useCartStore } from "@/store/cart.store";
import { CartItem, UpdateVariantType } from "@/types/cart.type";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const useCart = () => {
  const [loading, setLoading] = useState<boolean>(false);

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
    onMutate: () => setLoading(true),
    onSuccess: () => setLoading(false),
  });

  const removeCartMutation = useMutation({
    mutationFn: CartService.remove,
    onMutate: () => setLoading(true),
    onSuccess: () => setLoading(false),
  });

  const updateColorMutation = useMutation({
    mutationFn: CartService.updateColor,
    onMutate: () => setLoading(true),
    onSuccess: () => setLoading(false),
  });

  const updateSizeMutation = useMutation({
    mutationFn: CartService.updateSize,
    onMutate: () => setLoading(true),
    onSuccess: () => setLoading(false),
  });

  const updateQuantityMutation = useMutation({
    mutationFn: CartService.updateQuantity,
    onMutate: () => setLoading(true),
    onSuccess: () => setLoading(false),
  });

  const handleAddToCart = (cartItem: CartItem) => {
    const prev = snapshot();

    addItem(cartItem);

    addCartMutation.mutate(cartItem, {
      onError: () => {
        restore(prev);
        setLoading(false);
      },
    });
  };

  const handleRemoveCart = (sku: string) => {
    const prev = snapshot();

    removeItem(sku);

    removeCartMutation.mutate(sku, {
      onError: () => {
        restore(prev);
        setLoading(false);
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
          setLoading(false);
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
          setLoading(false);
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
          setLoading(false);
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
