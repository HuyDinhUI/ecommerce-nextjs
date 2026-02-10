export interface ShippingMethodDTO {
    code: string
    name: string
    provinceFee: number
    cityFee: number
    estimateDaysMin: number
    estimateDaysMax: number
}