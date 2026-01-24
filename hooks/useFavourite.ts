import { toast } from "@/components/ui/toast";
import { FavouriteService } from "@/services/favourite-service";
import { useFavouriteStore } from "@/store/favourite.store";
import { FavouriteItem } from "@/types/favourite.type";
import { useMutation } from "@tanstack/react-query";

const useFavourite = () => {
  const { toggle, remove, snapshot, restore, clear, isFavourite, items } =
    useFavouriteStore();

  const addFavouriteMutation = useMutation({
    mutationFn: FavouriteService.add,
  });

  const removeFavouriteMutation = useMutation({
    mutationFn: FavouriteService.remove,
  });

  const handleToggleFavourite = (item: FavouriteItem, checked: boolean) => {
    const prev = snapshot();

    toggle(item);

    if (checked) {
      addFavouriteMutation.mutate(item.productId, {
        onSuccess: () => toast.success("Item has been add to favourite"),
        onError: (e) => {
          toast.error(e.message);
          restore(prev);
        },
      });
    } else {
      removeFavouriteMutation.mutate(item.productId, {
        onError: (e) => {
          toast.error(e.message);
          restore(prev);
        },
      });
    }
  };

  const handleRemoveFavourite = (productId: string) => {
    const prev = snapshot();

    remove(productId);

    removeFavouriteMutation.mutate(productId, {
      onError: (e) => {
        toast.error(e.message);
        restore(prev);
      },
    });
  };

  return {
    items,
    handleToggleFavourite,
    handleRemoveFavourite,
    isFavourite,
    loading:
      addFavouriteMutation.isPending || removeFavouriteMutation.isPending,
  };
};

export default useFavourite;
