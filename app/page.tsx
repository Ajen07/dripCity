import Hero from "@/components/LandingPage/ui/Hero"; 
import FeaturedProducts from "@/components/LandingPage/ui/FeaturedProducts";

import Collections from "@/components/LandingPage/ui/Collections";

export default function Landing() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <section className="flex justify-center pt-10 min-h-screen">
          <FeaturedProducts />
        </section>
        <section className="flex justify-center pt-10 min-h-screen">
          <Collections />
        </section>
      </main>
    </>
  );
}
