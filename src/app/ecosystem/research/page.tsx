import { Achievements } from "@/components/sections/ecosystem/research/Achievements";
import { ResearchHero } from "@/components/sections/ecosystem/research/ResearchHero";
import { ResearchLife } from "@/components/sections/ecosystem/research/ResearchLife";
import { ResearchTools } from "@/components/sections/ecosystem/research/ResearchTools";

export default function ResearchPage() {
	return (
		<div className="flex flex-col">
			{/* Banner 占位 */}
			<section className="w-full bg-white py-12">
				<div className="max-w-7xl mx-auto px-4 md:px-8">
					<div className="w-full max-w-[1323px] h-[567px] mx-auto bg-white border border-black">
						Banner 占位
					</div> 
				</div>
			</section>

			<ResearchHero />
			<Achievements />
			<ResearchLife />
			<ResearchTools />
		</div>
	);
}
