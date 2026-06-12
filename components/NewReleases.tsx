import { products } from "@/data/products";
import { NewReleaseCard } from "./NewReleaseCard";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

export default function NewReleases() {
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const newReleasesProducts = sortedProducts.filter((product) => {
    const releaseDate = new Date(product.createdAt);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - releaseDate.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff <= 30;
  });

  const finalNewReleasesProducts =
    newReleasesProducts.length >= 5
      ? newReleasesProducts
      : sortedProducts.slice(0, 5);

  const visibleProducts = finalNewReleasesProducts.slice(0, 5); // Show only the first 5 new releases

  return (
    <section className="w-full px-6 py-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Releases</h2>
          <p className="text-sm text-gray-500">Fresh assets added weekly 🔥</p>
        </div>

        {/* <button className="flex items-center gap-2 text-sm text-indigo-600 hover:underline">
          View all new releases <ArrowRight size={16} />
        </button> */}
      </div>

      {/* GRID AREA */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} item={item} product={item} />
        ))}
      </div>
    </section>
  );
}
