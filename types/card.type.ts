import { Size } from "./product.type"

export interface CardItem {
    productId: string

    variant: {
        sku: string,
        color: string
        size: Size
    }

    name: string
    image: string

    price: number
    quantity: number
}

export interface Card {
    CardItem: CardItem[]
    totalQuantity: number
    totalPrice: number
}