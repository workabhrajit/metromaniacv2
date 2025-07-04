import { AnimatedBeamMultipleOutputDemo } from "@/components/all-in-one";
import { GallerySection } from "@/components/gallery-section";
import { GameHero } from "@/components/game-hero";
 import { TextReveal } from "@/components/magicui/text-reveal";
import { RetroGridDemo } from "@/components/retro-grid";
import { ScatteredTeamSection } from "@/components/scattered-team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ScrollBasedVelocityDemo } from "@/components/text-scroll";
  
export default function Home() {
  return (
    <div className="min-h-screen">
      <GameHero />
      <ScrollBasedVelocityDemo/>
      <AnimatedBeamMultipleOutputDemo/>
      <ScatteredTeamSection/>
      <GallerySection/>
      <TextReveal>Rudreadeb khankir chele. pod e bash dhukiye handle mare.</TextReveal>
      <RetroGridDemo/>
     <TestimonialsSection/>
     
      </div>
  );
}
