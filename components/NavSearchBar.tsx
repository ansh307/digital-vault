"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { products } from "@/data/products";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavSearchBar() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  // ✅ Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // ✅ Optimized search (useMemo instead of state)
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    const q = debouncedQuery.toLowerCase();

    return products
      .filter((product) => {
        const title = product.title.toLowerCase();
        const category = product.category.toLowerCase();
        const desc = product.desc.toLowerCase();

        return title.includes(q) || category.includes(q) || desc.includes(q);
      })
      .slice(0, 6); // limit results
  }, [debouncedQuery]);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev === 0 ? results.length - 1 : prev - 1));
    }

    if (e.key === "Enter") {
      router.push(`/product/${results[activeIndex].id}`);
      setQuery("");
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [debouncedQuery]);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      el.scrollIntoView({
        block: "nearest", // 🔥 important (not jumpy)
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="flex-1 min-w-2xl relative">
      {/* INPUT */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for bundles, templates, LUTs, presets..."
        className="w-full pl-4 pr-12 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* BUTTON */}
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-lg">
        <Search size={18} />
      </button>

      {/* RESULTS */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => {
                router.push(`/product/${product.id}`);
                setQuery("");
              }}
              className={`flex items-center gap-3 p-3 cursor-pointer ${
                index === activeIndex ? "bg-indigo-50" : "hover:bg-gray-50"
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-10 h-10 rounded object-cover"
              />
              <span className="text-sm font-medium">{product.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* NO RESULTS */}
      {debouncedQuery && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg p-3 text-sm text-gray-500 shadow z-10">
          No results found
        </div>
      )}
    </div>
  );
}
