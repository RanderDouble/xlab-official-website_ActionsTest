import { BusinessExploration } from "@/components/sections/ecosystem/innovation/BusinessExploration";
import { InnovationHero } from "@/components/sections/ecosystem/innovation/InnovationHero";
import { PartnerSync } from "@/components/sections/ecosystem/innovation/PartnerSync";
import { VentureCard } from "@/components/sections/ecosystem/innovation/VentureCard";
import { PartnerNews } from "@/components/sections/ecosystem/innovation/PartnerNews";
import { Banner } from "@/components/common/Banner";

export default function InnovationPage() {
  return (
    <div className="flex flex-col">
      <Banner imageSrc="/innovation/banner.svg" alt="Innovation Banner" />
      <InnovationHero />
      <BusinessExploration />
      <VentureCard />
      <PartnerSync />
      <PartnerNews />
    </div>
  );
}
