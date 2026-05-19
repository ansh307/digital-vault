import Image from "next/image";
import { Star } from "lucide-react";

export function TestimonialCard({ item }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex gap-8">
        {/* QUOTE ICON */}
        <div className="text-indigo-500 text-5xl mb-3">“</div>

        <div>
          {/* TEXT */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {item.text}
          </p>

          {/* STARS */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>

      {/* USER */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
          <p className="text-xs text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
