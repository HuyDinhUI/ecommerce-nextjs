import { Metadata } from "next";
import FormCheckout from "./form-checkout"
import OrderDetail from "./order-detail"

export const metadata: Metadata = {
  title: "Checkout | Lumina",
  description: "Store fashion",
};


const CheckoutPage = () => {
    return (
        <div className="grid grid-cols-2 p-10">
            <FormCheckout/>
            <OrderDetail/>
        </div>
    )
}

export default CheckoutPage