import { Size } from "./product.type";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export type PaymentStatus = "unpaid" | "paid" | "failed" | "refunded";

export type PaymentMethod = "cod" | "paypal";

export interface OrderItem {
  productId: string;
  sku: string;

  attribute: {
    color: {
      name: string;
      code: string;
    };
    size: Size;
  };

  name: string;
  slug: string;
  image: string;
  material: string;
  price: number;
  quantity: number;
}

export interface OrderAddress {
  email: string;
  phone: string;
  fullname: string;
  country?: string;
  city: string;
  district: string;
  addressLine: string;
}

export interface OrderShipping {
  methodId: string;
  methodName: string;
  fee: number;
  estimateDays: number;
}

export interface OrderPayment {
  method: PaymentMethod;
  status: PaymentStatus;

  transactionId?: string;
  paidAt?: string;
}

export interface OrderTotal {
  subtotal: number;
  shippingFee: number;
  tax: number;
  quantity: number
  discount: number;
  total: number;
}

export interface Order {
  id: string;
  orderCode: string;

  userId?: string;

  items: OrderItem[];

  address: OrderAddress;
  shipping: OrderShipping;
  payment: OrderPayment;

  status: OrderStatus;
  totals: OrderTotal;

  note?: string;

  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderPayload {
  items: OrderItem[];
  address: OrderAddress;
  shippingMethodId: string;
  paymentMethod: PaymentMethod;
  couponCode?: string;
  note?: string;
}
