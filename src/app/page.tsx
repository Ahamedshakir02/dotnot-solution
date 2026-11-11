import { Clientele } from "@/components/home/Clientele";
import { GrowthAuditTeaser } from "@/components/home/GrowthAuditTeaser";
import { Hero } from "@/components/home/Hero";
import { HowWeDiffer } from "@/components/home/HowWeDiffer";
import { IsThisYou } from "@/components/home/IsThisYou";
import { Results } from "@/components/home/Results";
import { ResultsTicker } from "@/components/home/ResultsTicker";
import { ShareRequirement } from "@/components/home/ShareRequirement";
import { Team } from "@/components/home/Team";
import { Values } from "@/components/home/Values";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { Footer } from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ResultsTicker />
        <Clientele />
        <IsThisYou />
        <WhatWeOffer />
        <HowWeDiffer />
        <GrowthAuditTeaser />
        <Results />
        <Values />
        <Team />
        <ShareRequirement />
      </main>
      <Footer />
    </>
  );
}
