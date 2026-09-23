import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FinderSection } from "@/components/home/FinderSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { WhyUs } from "@/components/home/WhyUs";
import { Comparison } from "@/components/home/Comparison";
import { Partners } from "@/components/home/Partners";
import { InsightsGallery } from "@/components/home/InsightsGallery";
import { InstagramReels } from "@/components/home/InstagramReels";
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
      <Comparison />
      <InsightsGallery />
      <InstagramReels />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
