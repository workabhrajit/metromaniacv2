import { AnimatedBeamMultipleOutputDemo } from "@/components/all-in-one";
import { FloatingHeader } from "@/components/floating-header";
import { GameHero } from "@/components/game-hero";
import { ScrollBasedVelocityDemo } from "@/components/text-scroll";
 
export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingHeader />
      <GameHero />
      <ScrollBasedVelocityDemo/>
      <AnimatedBeamMultipleOutputDemo/>
      </div>
  );
}
