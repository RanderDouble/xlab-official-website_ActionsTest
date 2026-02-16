import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { TalentSystem } from "@/components/sections/about/TalentSystem";
import { TalentOutcomes } from "@/components/sections/about/TalentOutcomes";
import { AboutCooperation } from "@/components/sections/about/AboutCooperation";
import { HomeTeamContainer } from "@/components/sections/about/HomeTeamContainer";

export default function AboutPage() {
	return (
		<div className="flex flex-col">
			<HomeTeamContainer />
			<AboutIntro />
			<AboutTeam />
			<TalentSystem />
			<TalentOutcomes />
			<AboutCooperation />
		</div>
	);
}
