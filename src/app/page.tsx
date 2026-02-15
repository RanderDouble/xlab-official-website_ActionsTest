import { HomeBanner } from "@/components/sections/home/HomeBanner";
import { HomeEcology } from "@/components/sections/home/HomeEcology";
import { HomeResources } from "@/components/sections/home/HomeResources";
import { LabNewsSection } from "@/components/sections/home/LabNewsSection";

export default function HomePage() {
	return (
    <div className="flex flex-col">
      <HomeBanner />
      <LabNewsSection />
      <HomeEcology />
      <HomeResources />
    </div>
  );
}
