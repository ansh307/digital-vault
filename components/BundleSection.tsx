import Image from "next/image";
import { Check, Infinity, ArrowRight } from "lucide-react";

export default function BundleSection() {
  return (
    <section id="bundles" className="w-full px-6 py-6">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-10">
        {/* BG IMAGE */}
        <Image
          src="/homepage/banner-bg.png"
          alt="bg"
          fill
          className="object-cover opacity-20 pointer-events-none"
        />
        {/* LEFT */}
        <div className="flex-1 space-y-5">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium">
            🔥 BEST SELLING BUNDLE
          </span>

          <h2 className="text-xl font-bold text-gray-900">
            Ultimate Creator Bundle
          </h2>

          <p className="text-sm text-gray-600">
            Everything you need to create professional content
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              "500+ Premium Assets",
              "Regular Updates",
              "Lifetime Access",
              "Instant Download",
              "Commercial License",
              "Multi-format Support",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-gray-700"
              >
                <Check size={16} className="text-indigo-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER */}
        <div className="flex items-center gap-4 ">
          {/* PRODUCT IMAGE */}
          <div className="relative w-[200px] h-[260px]">
            <Image
              src="/homepage/bundle-box.png" // replace with your image
              alt="bundle"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* STATS */}
          <div className="flex flex-col gap-3">
            <Stat label="Assets" value="500+" />
            <Stat label="Categories" value="50+" />
            <Stat label="Possibilities" value="∞" icon />
          </div>
        </div>

        <div className="border-l border-gray-200 h-48" />

        {/* RIGHT */}
        <div className="flex-1 space-y-5">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium">
            LIMITED TIME OFFER
          </span>

          {/* PRICE */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">$79</span>
            <span className="line-through text-gray-400">$149</span>
            <span className="text-indigo-600 font-medium text-sm">47% OFF</span>
          </div>

          {/* CTA */}
          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Get This Bundle <ArrowRight size={16} />
          </button>

          <p className="text-xs text-gray-500">
            ○ One-time payment • Lifetime access
          </p>

          {/* USERS */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                >
                  <Image
                    src={`/homepage/avatar-${i}.jpg`}
                    alt="user"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <span className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">+2K</span> Join 5,000+
              Creators
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: boolean;
}) {
  return (
    <div className="px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-200 text-center min-w-[120px]">
      <div className="flex items-center justify-center gap-1 font-semibold text-gray-900">
        {icon ? <Infinity size={16} /> : value}
      </div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
