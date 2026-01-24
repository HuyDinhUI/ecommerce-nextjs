import { DATA_ORDERS } from "@/app/mock/orders.mock"

export const GET = (req: Request) => {
    return Response.json(DATA_ORDERS)
}