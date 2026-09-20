import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FinderSection } from "@/components/home/FinderSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { WhyUs } from "@/components/home/WhyUs";
import { Partners } from "@/components/home/Partners";
import { InsightsGallery } from "@/components/home/InsightsGallery";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <ProductGrid />
      <ServicesOverview />
      <FinderSection />
      <ProcessSteps />
      <WhyUs />
      <InsightsGallery />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
