import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ProductGrid } from "@/components/home/ProductGrid";
import { ShowroomSection } from "@/components/home/ShowroomSection";
import { KnowledgeSection } from "@/components/home/KnowledgeSection";
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
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteSchema } from "@/lib/schema";

// Backgrounds alternate sand/surface; the dark showroom breaks the rhythm on purpose.
export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Hero />
      <Partners />
      <AboutIntro />
      <ProductGrid background="surface" />
      <ShowroomSection />
      <KnowledgeSection />
      <FinderSection />
      <ProcessSteps />
      <ServicesOverview background="surface" />
      <Comparison />
      <WhyUs />
      <InstagramReels />
      <InsightsGallery />
      <ServiceArea />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
