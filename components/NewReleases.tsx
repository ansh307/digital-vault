import { newReleases } from "@/data/newReleases";
import { NewReleaseCard } from "./NewReleaseCard";
import { ArrowRight } from "lucide-react";

export default function NewReleases() {
  return (
    <section className="w-full px-6 py-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Releases</h2>
          <p className="text-sm text-gray-500">Fresh assets added weekly 🔥</p>
        </div>

        <button className="flex items-center gap-2 text-sm text-indigo-600 hover:underline">
          View all new releases <ArrowRight size={16} />
        </button>
      </div>

      {/* GRID AREA */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {newReleases.map((item) => (
          <NewReleaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
