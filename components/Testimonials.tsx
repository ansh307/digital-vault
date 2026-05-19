import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full px-6 py-12">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-xs text-gray-500">Trusted by creators worldwide</p>
        </div>

        <button className="flex items-center gap-2 text-sm text-indigo-600 hover:underline">
          View all reviews <ArrowRight size={16} />
        </button>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
