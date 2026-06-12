import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  const inValidCategory = function () {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Invalid Category</h1>
        <p className="text-gray-500 mt-2">This category does not exist.</p>
      </div>
    );
  };
  if (!category) {
    return inValidCategory();
  }

  const filteredProducts = products.filter((p) => p.category === category.slug);

  return (
    <section className="w-full px-6 py-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {category.title}
        </h2>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
