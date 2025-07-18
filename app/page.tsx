 import BentoServicesGrid from "@/components/bento-services-grid";
import { GallerySection } from "@/components/gallery-section";
import { GameHero } from "@/components/game-hero";
 import { TextReveal } from "@/components/magicui/text-reveal";
import TeamSectionDemo from "@/components/team";
  import Testimonials from "@/components/testi";
 import { ScrollBasedVelocityDemo } from "@/components/text-scroll";
   
export default function Home() {
  return (
    <div className="min-h-screen">
      <GameHero />
      <ScrollBasedVelocityDemo/>
       <BentoServicesGrid/>
       <GallerySection/>
      <TextReveal>Rudreadeb khankir chele. pod e bash dhukiye handle mare.</TextReveal>
  <TeamSectionDemo/>
  <Testimonials/>     
      </div>
  );
}
