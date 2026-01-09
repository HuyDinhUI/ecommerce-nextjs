import { CreateParams } from "@/utils/createParam";
import { ProductService } from "../services/product-service";
import { Params } from "@/types/params.type";
import FilterSidebar from "./filter-sidebar";
import FilterBar from "./filter-bar";
import Products from "./list-products";
import { InputSearch } from "@/components/form-action/search-form";
import { IoChevronBack } from "react-icons/io5";

interface PageProps {
  searchParams: Params;
}

const ProductListPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const query = CreateParams(params);

  const data = await ProductService.getAll(query);

  return (
    <div className="font-beatrice-deck">

      {/* Mobile */}
      <div className="mb-5 lg:hidden px-5">
        <h1 className="uppercase text-center text-xl">
          Products
        </h1>
        <div className="mt-5">
          <InputSearch />
        </div>
        <div className="flex w-[60%] justify-between items-center mt-10 pb-3">
          <h2>Filters</h2>
          <IoChevronBack/>
        </div>
      </div>
      {/* End Mobile */}

      <div className="flex relative">
        <div className="lg:mt-5 md:px-10 max-md:px-5 max-md:w-[60%] sticky top-0 h-200 overflow-y-auto">
          <h1 className="max-lg:hidden">Filters</h1>
          <FilterSidebar />
        </div>
        <div className="flex-1 max-md:overflow-hidden py-1">
          <h1 className="uppercase max-lg:hidden text-xl">
            Products
          </h1>
          <div className="flex gap-5">
            <div className="max-lg:hidden">
              <InputSearch />
            </div>
            <div className="max-lg:absolute max-sm:max-w-100 max-lg:overflow-x-scroll max-lg:p-1 max-lg:ps-5">
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
