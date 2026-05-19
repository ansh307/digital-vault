import BrowseCategory from "@/components/BrowseCategory";
import BundleSection from "@/components/BundleSection";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularProducts />
      <BrowseCategory />
      <BundleSection />
      <Testimonials />
    </main>
  );
}
