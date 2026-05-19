"use client";

import {
  Sparkle,
  Sparkles,
  Download,
  ShieldCheck,
  Cloud,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const cards = [
  "/homepage/herocard-1.png",

  "/homepage/herocard-3.png",
  "/homepage/herocard-2.png",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full ">
      <div className="relative max-w-7xl mx-auto min-h-[65vh] flex items-center overflow-hidden rounded-xl">
        {/* BACKGROUND */}
        <Image
          src="/homepage/digital-vault-hero-bg.png"
          alt="bg"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/80 to-transparent" />

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-medium">
              <Sparkles className="inline-block mr-2 w-4 h-4" />
              PREMIUM DIGITAL ASSETS
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-13">
              Premium Assets.
              <br />
              <span className="text-indigo-600">Instant</span> Access.
            </h1>

            <p className="text-gray-600 max-w-md">
              High-quality video bundles, templates, presets, and more. Pay
              once, use forever.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-6">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition">
                Explore Products →
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition">
                View Bundles
              </button>
            </div>

            {/* TRUST */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                  >
                    <Image
                      src={`/homepage/avatar-${i}.jpg`}
                      alt={`user${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-600">
                <div>⭐⭐⭐⭐⭐</div>
                Trusted by 10,000+ Creators
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center">
            {cards.map((src, index) => {
              const isActive = index === active;
              const isNext = index === (active + 1) % cards.length;
              const isPrev =
                index === (active - 1 + cards.length) % cards.length;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isActive
                      ? "z-30 scale-100 translate-x-0 opacity-100"
                      : isNext
                        ? "z-20 scale-75 translate-x-45 opacity-70"
                        : isPrev
                          ? "z-20 scale-75 -translate-x-45 opacity-70"
                          : "opacity-0 scale-75"
                  }`}
                >
                  <div className="w-[260px] h-[360px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <Image
                      src={src}
                      alt="card"
                      width={260}
                      height={360}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              );
            })}

            {/* DOTS */}
            <div className="absolute bottom-0 flex gap-2">
              {cards.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === active ? "bg-indigo-600 w-4" : "bg-gray-300"
                  } transition-all`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM FEATURES */}
      <div className="w-full px-6 pb-6 mt-5 ">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-lg shadow-lg border border-gray-100 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4">
          <Feature
            icon={<Download size={25} />}
            title="Instant Download"
            desc="Get immediate access after purchase"
          />

          <Feature
            icon={<ShieldCheck size={25} />}
            title="Secure Payment"
            desc="100% secure checkout powered by trusted partners"
          />

          <Feature
            icon={<Cloud size={25} />}
            title="Lifetime Access"
            desc="Access your files anytime, forever"
          />

          <Feature
            icon={<Star size={25} />}
            title="Premium Quality"
            desc="Carefully crafted by industry professionals"
            isLast
          />
        </div>
      </div>
    </section>
  );
}

export function Feature({
  icon,
  title,
  desc,
  isLast = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-3 pr-6 relative">
      {/* ICON */}
      <div className="p-2 rounded-lg  text-indigo-600">{icon}</div>

      {/* TEXT */}
      <div className="max-w-40">
        <h4 className="font-semibold text-sm text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
      </div>

      {/* DIVIDER (only on md+) */}
      {!isLast && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-100" />
      )}
    </div>
  );
}
