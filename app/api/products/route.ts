import { DATA_CLOTHES_MOCK } from "@/app/mock/products.mock"

interface Params {
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

export const GET = (request: Request) => {

    const {searchParams} = new URL(request.url)

    console.log(searchParams.get("color"))
    
    return Response.json(DATA_CLOTHES_MOCK, {status: 200})
}

