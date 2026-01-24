import { CreateParams } from "@/utils/createParam";
import { ProductService } from "../../services/product-service";
import { ParamsProduct } from "@/types/params.type";
import FilterSidebar from "./filter-sidebar";
import FilterBar from "./filter-bar";
import Products from "./list-products";
import { InputSearch } from "@/components/form-action/search-form";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Lumina",
  description: "Store fashion",
};

interface PageProps {
  searchParams: ParamsProduct;
}

const ProductListPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const query = CreateParams(params);

  const data = await ProductService.getAll(query);

  return (
    <div className="font-beatrice-deck">
      {/* Mobile */}
      <div className="mb-5 lg:hidden max-sm:px-5 px-10">
        <Breadcrumb classname="justify-center flex"/>
        <h1 className="uppercase text-center text-xl">Products</h1>
        <div className="mt-5">
          <InputSearch />
        </div>
      </div>
      {/* End Mobile */}

      <div className="flex overflow-hidden">
        <div className="max-lg:hidden px-10 sticky top-0 h-200 overflow-y-auto">
          <h1 className="max-lg:hidden">Filters</h1>
          <FilterSidebar />
        </div>
        <div className="py-1 flex-1 overflow-hidden md:px-10 max-sm:px-5">
          <Breadcrumb classname="max-lg:hidden" />
          <h1 className="uppercase max-lg:hidden text-xl">Products</h1>
          <div className="flex gap-5 mt-2">
            <div className="max-lg:hidden">
              <InputSearch classname="" />
            </div>
            <div className="max-sm:max-w-100 max-lg:overflow-x-scroll max-lg:p-1 flex-1">
              <FilterBar />
            </div>
          </div>
          <Products data={data.payload} />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
