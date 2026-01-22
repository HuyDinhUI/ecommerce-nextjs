import http from "@/utils/http";

interface IFavouriteService {
    add(productId: string): Promise<{status: number, payload: any}>
    remove(productId: string): Promise<{status: number, payload: any}>
}

class Favourite implements IFavouriteService {
    add(productId: string): Promise<{ status: number; payload: any }> {
        return http.post(`/favourite/add`,productId)
    }

    remove(productId: string): Promise<{ status: number; payload: any; }> {
        return http.delete(`/favourite/remove?id=${productId}`)
    }
}

export const FavouriteService = new Favourite()