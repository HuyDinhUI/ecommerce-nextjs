import { ProductService } from "@/app/services/product-service";
import { ProductDetail } from "@/components/product/product-detail";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: { product_id: string };
}) => {
  const { product_id } = await searchParams;

  const data = await ProductService.getOne(product_id);

  return (
    <div>
      <div className="flex justify-center">
        <Breadcrumb />
      </div>
      <ProductDetail data={data.payload} />
    </div>
  );
};

export default ProductPage;
