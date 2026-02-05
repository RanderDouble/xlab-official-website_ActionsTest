import { ColumnEntry } from "@/components/sections/ecosystem/engineering/ColumnEntry";
import { EngineeringNews } from "@/components/sections/ecosystem/engineering/EngineeringNews";
import { ProjectCarousel } from "@/components/sections/ecosystem/engineering/ProjectCarousel";

export default function EngineeringPage() {
	return (
		<div className="flex flex-col">
			<ProjectCarousel />
			<ColumnEntry />
			<EngineeringNews />
		</div>
	);
}
