import { BusinessList } from "@/components/sections/ecosystem/innovation/BusinessList";
import { InnovationHero } from "@/components/sections/ecosystem/innovation/InnovationHero";
import { PartnerSync } from "@/components/sections/ecosystem/innovation/PartnerSync";
import { VentureCard } from "@/components/sections/ecosystem/innovation/VentureCard";

export default function InnovationPage() {
  return (
    <div className="flex flex-col">
      <InnovationHero />
      <BusinessList />
      <VentureCard />
      <PartnerSync />
    </div>
  );
}
