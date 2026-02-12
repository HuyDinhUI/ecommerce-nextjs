export interface ParamsProduct {
    q?: string
    color?: string;
    size?: string;
    sort?: string;
    availability?: string
    category?: string
    priceRange?: string
    collections?: string
    gender?: string
    minPrice?: string
    maxPrice?: string
    tag?: string
    rating?: string
    page?: string;
    limit?: string;
}

export interface ParamsOrder {
    status?: string
    paymentMethod?: string
    shippingMethod?: string
    sort?: string
    page?: string;
    limit?: string;
}