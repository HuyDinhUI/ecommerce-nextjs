import FormCheckout from "./form-checkout"
import OrderDetail from "./order-detail"

const CheckoutPage = () => {
    return (
        <div className="grid grid-cols-2 p-10">
            <FormCheckout/>
            <OrderDetail/>
        </div>
    )
}

export default CheckoutPage