import { Size } from "./product.type"

export interface CartItem {
    id: string
    productId: string

    variant: {
        sku: string,
        color: {
            name: string,
            code: string
        }
        size: Size
    }

    name: string
    slug: string
    image: string
    material: string
    price: number
    quantity: number
}

export interface Cart {
    CartItem: CartItem[]
    totalQuantity: number
    totalPrice: number
}