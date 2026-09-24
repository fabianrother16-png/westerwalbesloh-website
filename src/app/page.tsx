import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FinderSection } from "@/components/home/FinderSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { WhyUs } from "@/components/home/WhyUs";
import { Comparison } from "@/components/home/Comparison";
import { InsightsGallery } from "@/components/home/InsightsGallery";
import { InstagramReels } from "@/components/home/InstagramReels";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TechShowcase } from "@/components/home/TechShowcase";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Hero />
      <Partners />
      <AboutIntro />
      <ProductGrid background="surface" />
      <TechShowcase />
      <ServicesOverview background="sand" />
      <FinderSection />
      <ProcessSteps />
      <WhyUs />
      <Comparison />
      <InsightsGallery />
      <InstagramReels />
      <Testimonials />
      <ServiceArea />
      <CtaBanner />
    </>
  );
}
