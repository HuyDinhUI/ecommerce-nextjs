import { ProductList } from "@/components/product/product-list"
import { ProductClothes } from "@/types/product.type"

const Products = ({data}:{data: ProductClothes[]}) => {
    return (
        <div className="mt-7">
            <ProductList items={data}></ProductList>
        </div>
    )
}

export default Products