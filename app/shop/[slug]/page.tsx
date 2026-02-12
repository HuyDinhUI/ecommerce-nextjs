import { ProductDetail } from "@/components/product/product-detail";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductService } from "@/lib/product/product-service";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: { product_id: string };
}) => {
  const { product_id } = await searchParams;

  if (!product_id) {
    return <div>Product ID is required</div>;
  }

  const data = await ProductService.getOne(product_id);

  return (
    <div className="lg:px-30">
      <div className="flex justify-center">
        <Breadcrumb />
      </div>
      <ProductDetail data={data.payload} />
    </div>
  );
};

export default ProductPage;
