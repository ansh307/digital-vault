import {
  Download,
  ShieldCheck,
  Clock,
  Star,
  Lock,
  LockKeyholeIcon,
} from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-7 gap-10">
        {/* LEFT BRAND */}
        <div className="md:col-span-2 space-y-5">
          {/* LOGO */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-gray-900">
              DIGITAL<span className="text-indigo-600">VAULT</span>
            </span>
          </div>

          <p className="text-sm text-gray-600 max-w-72">
            Premium digital assets for creators. Instant access. Lifetime value.
          </p>

          {/* FEATURES */}
          <div className="space-y-3 text-xs text-gray-600">
            <FooterFeature
              icon={<Download size={16} />}
              text="Instant Download"
            />
            <FooterFeature
              icon={<ShieldCheck size={16} />}
              text="Secure Payment"
            />
            <FooterFeature icon={<Clock size={16} />} text="Lifetime Access" />
            <FooterFeature icon={<Star size={16} />} text="Premium Quality" />
          </div>
        </div>

        {/* LINKS */}
        <FooterColumn
          title="Products"
          links={[
            "Video Bundles",
            "Presets & LUTs",
            "Templates",
            "Graphics",
            "Sound Effects",
            "Courses",
            "All Products",
          ]}
        />

        <FooterColumn
          title="Resources"
          links={[
            "Freebies",
            "Blog",
            "Tutorials",
            "Help Center",
            "License Info",
            "System Requirements",
          ]}
        />

        <FooterColumn
          title="Company"
          links={[
            "About Us",
            "Why Choose Us",
            "Reviews",
            "Affiliate Program",
            "Careers",
            "Contact Us",
          ]}
        />

        <FooterColumn
          title="Support"
          links={[
            "Help Center",
            "FAQs",
            "Refund Policy",
            "Terms of Use",
            "Privacy Policy",
          ]}
        />

        <FooterColumn
          title="Legal"
          links={[
            "License Agreement",
            "Terms of Service",
            "Privacy Policy",
            "DMCA Policy",
            "Cookies Policy",
          ]}
        />
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 max-w-7xl mx-auto" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © 2024 DigitalVault. All rights reserved.
        </p>

        {/* PAYMENTS */}
        <div className="flex items-center gap-3">
          {[
            "visa",
            "mastercard",
            "paypal",
            "apple-pay",
            "google-pay",
            "stripe",
          ].map((item, i) => (
            <div
              key={i}
              className="px-3 py-2 border border-gray-100 rounded-md bg-gray-50 flex items-center justify-center"
            >
              <Image
                src={`/payments/${item}.png`}
                alt={item}
                width={100}
                height={40}
                className="h-4 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* SECURITY */}
        <p className="text-xs text-gray-500 flex items-center gap-2">
          <LockKeyholeIcon size={16} />
          100% Secure Checkout
        </p>
      </div>
    </footer>
  );
}

/* SMALL COMPONENTS */

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-4 text-sm">{title}</h4>
      <ul className="space-y-2 text-xs text-gray-600">
        {links.map((link, i) => (
          <li
            key={i}
            className="hover:text-indigo-600 cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterFeature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-indigo-600">{icon}</span>
      {text}
    </div>
  );
}
