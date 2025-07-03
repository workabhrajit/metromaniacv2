import { FloatingHeader } from "@/components/floating-header";
import { GameHero } from "@/components/game-hero";
 
export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingHeader />
      <GameHero />
      </div>
  );
}
