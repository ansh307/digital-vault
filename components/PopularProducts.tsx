import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

export default function PopularProducts() {
  return (
    <section className="w-full px-6 py-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Popular Products
        </h2>

        <button className="flex items-center gap-2 text-sm text-indigo-600 hover:underline">
          View all products <ArrowRight size={16} />
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
