import { CreateParams } from "@/utils/createParam";
import { ProductService } from "../services/product-service";
import { Params } from "@/types/params.type";
import FilterSidebar from "./filter-sidebar";
import FilterBar from "./filter-bar";
import Products from "./list-products";

interface PageProps {
  searchParams: Params
}

const ProductListPage = async ({searchParams}:PageProps) => {
  const params = await searchParams
  const query = CreateParams(params)

  const data = await ProductService.getAll(query)

  return (
    <div className="p-10 flex">
      {/* sidebar */}
      <FilterSidebar/>
      <div>
        <FilterBar/>
        <Products data={data.payload}/>
      </div>
    </div>
  )
};

export default ProductListPage;
