import ProductHero from "@/components/ProductHero";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return <ProductHero product={product} />;
}
