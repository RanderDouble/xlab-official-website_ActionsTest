import { Achievements } from "@/components/sections/ecosystem/research/Achievements";
import { ResearchHero } from "@/components/sections/ecosystem/research/ResearchHero";
import { ResearchLife } from "@/components/sections/ecosystem/research/ResearchLife";
import { ResearchTools } from "@/components/sections/ecosystem/research/ResearchTools";

export default function ResearchPage() {
	return (
		<div className="flex flex-col">
			<ResearchHero />
			<Achievements />
			<ResearchLife />
			<ResearchTools />
		</div>
	);
}
