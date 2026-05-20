import Image from "next/image";
import { Star } from "lucide-react";

export default function TrustedSection() {
  return (
    <section className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto bg-gray-50/50 border-x border-t border-gray-100 rounded-t-2xl">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 py-6 ">
          {/* LEFT */}
          <div className="flex-1 flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Trusted by 25,000+ Creators Worldwide
            </h3>

            <div className="flex items-center gap-10 opacity-70">
              <Brand
                src="/homepage/trusted/youtube.svg"
                alt="YouTube"
                height={20}
                width={90}
              />
              <Brand
                src="/homepage/trusted/tiktok.png"
                alt="TikTok"
                height={20}
                width={90}
              />
              <Brand
                src="/homepage/trusted/instagram.png"
                alt="Instagram"
                height={20}
                width={90}
              />
              <Brand
                src="/homepage/trusted/twitch.svg"
                alt="Twitch"
                height={20}
                width={70}
              />
            </div>
          </div>

          {/* divder */}
          <div className="hidden lg:block w-px h-16 bg-gray-100 ml-30 mr-5" />

          {/* RIGHT */}
          <div className="flex-1 flex w-full items-center justify-between ">
            {/* RATINGS */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm text-gray-700 mt-3">
                <span className="font-semibold text-gray-900">4.9/5</span>{" "}
                average rating
              </p>
              <p className="text-xs text-gray-500">from 3,200+ reviews</p>
            </div>

            {/* AVATARS */}
            <div className="flex items-center ">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full overflow-hidden border-2 border-white"
                  >
                    <Image
                      src={`/homepage/avatar-${i}.jpg`}
                      alt="user"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="w-14 h-14 -ml-2 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm font-medium border-2 border-white">
                +3K
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brand({
  src,
  alt,
  height,
  width,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
}) {
  return (
    <div className="w-[90px] h-[30px] flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
      />
    </div>
  );
}
