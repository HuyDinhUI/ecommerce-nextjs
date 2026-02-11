import { ParamsProduct } from "@/types/params.type";
import FilterSidebar from "./filter-sidebar";
import FilterBar from "./filter-bar";
import Products from "./list-products";
import { InputSearch } from "@/components/form-action/search-form";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import { ProductService } from "@/lib/product/product-service";
import { parseArray } from "@/utils/parse";
import { CategoryService } from "@/lib/category/category-service";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop | Lumina",
  description: "Store fashion",
};

interface PageProps {
  searchParams: ParamsProduct;
}

const ProductListPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;

  const keyword = params.keyword;

  const page = Number(params.page ?? 1);
  const limit = Number(params.limit ?? 12);
  const category = parseArray(params.category ?? "");
  const colors = parseArray(params.color ?? "");
  const sizes = parseArray(params.size ?? "");
  const gender = params.gender;
  const minPrice = params.minPrice;
  const maxPrice = params.maxPrice;

  const [products, categories] = await Promise.all([
    ProductService.getAll(
      page,
      limit,
      category,
      colors,
      sizes,
      gender,
      minPrice,
      maxPrice,
      keyword,
    ),

    CategoryService.getAll(),
  ]);

  return (
    <div className="font-beatrice-deck">
      {/* Mobile */}
      <div className="mb-5 lg:hidden max-sm:px-5 px-10">
        <Breadcrumb classname="justify-center flex" />
        <h1 className="uppercase text-center text-xl">Products</h1>
        <div className="mt-5">
          <InputSearch />
        </div>
      </div>
      {/* End Mobile */}

      <div className="flex">
        <div className="max-lg:hidden px-10 h-200 overflow-y-scroll sticky top-0">
          <h1 className="max-lg:hidden">Filters</h1>
          <FilterSidebar categories={categories.payload} />
        </div>
        <div className="py-1 flex-1 overflow-hidden md:px-10 max-sm:px-5 relative min-100vh">
          <Breadcrumb classname="max-lg:hidden" />
          <h1 className="uppercase max-lg:hidden text-xl">Products</h1>
          <div className="flex gap-5 mt-2">
            <div className="max-lg:hidden">
              <InputSearch classname="" />
            </div>
            <div className="max-sm:max-w-100 max-lg:overflow-x-scroll max-lg:p-1 flex-1">
              <FilterBar categories={categories.payload} />
            </div>
          </div>
          <Products data={products.payload.data} />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
