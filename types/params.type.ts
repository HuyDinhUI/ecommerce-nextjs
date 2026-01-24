export interface ParamsProduct {
    keyword?: string
    color?: string;
    size?: string;
    sort?: string;
    availability?: string
    category?: string
    priceRange?: string
    collections?: string
    tag?: string
    rating?: string
    page?: string;
}

export interface ParamsOrder {
    keyword?: string
    status?: string
    paymentMethod?: string
    shippingMethod?: string
    discount?: boolean
    tax?: boolean
}