import About from "@/components/About";
import Categories from "@/components/Categories";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import VisitUs from "@/components/VisitUs";
import { WhatsApp } from "@/components/icons";
import { bathProducts, enquiryLink, lightingProducts } from "@/lib/business";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductGrid id="products" title="Featured Lighting Collection" products={lightingProducts} />
        <Highlights />
        <Categories />
        <Feature />
        <ProductGrid id="bath" title="Bath & Outdoor Best Sellers" products={bathProducts} />
        <VisitUs />
      </main>
      <Footer />

      <a
        href={enquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MAK Bath & Lights on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <WhatsApp width={28} height={28} />
      </a>
    </>
  );
}
