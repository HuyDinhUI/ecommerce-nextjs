import { ProductList } from "@/components/ui/product"
import { ProductClothes } from "@/types/product.type"

const Products = ({data}:{data: ProductClothes[]}) => {
    return (
        <div className="mt-10 md:pe-5 max-sm:pe-5 min-w-90 max-lg:ps-5">
            <ProductList items={data}></ProductList>
        </div>
    )
}

export default Products