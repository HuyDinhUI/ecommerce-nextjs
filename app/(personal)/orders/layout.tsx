import { Separator } from "@/components/ui/separator"
import { ReactNode } from "react"

const OrderLayout = ({children}: {children:ReactNode}) => {
    return (
        <div className="pt-15 font-beatrice-deck">
            <h4 className="text-5xl">Order History</h4>
            <Separator classname="my-5 border-gray-300"/>
            <div>{children}</div>
        </div>
    )
}

export default OrderLayout