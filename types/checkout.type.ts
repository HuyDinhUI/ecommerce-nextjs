export interface Coupon {
    code: string
    discountAmount: number
}


export interface Checkout {
    coupon: Coupon
    shippingFee: number
}