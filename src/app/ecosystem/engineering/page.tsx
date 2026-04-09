import { ColumnEntry } from "@/components/sections/ecosystem/engineering/ColumnEntry";
import { EngineeringNews } from "@/components/sections/ecosystem/engineering/EngineeringNews";
import { ProjectCarousel } from "@/components/sections/ecosystem/engineering/ProjectCarousel";
import { Banner } from "@/components/common/Banner"; // 引入 Banner 组件

export default function EngineeringPage() {
	return (
		<div className="flex flex-col">
			<Banner imageSrc="/engineering/banner.svg" alt="Engineering Banner" />
			<ProjectCarousel />
			<ColumnEntry />
			<EngineeringNews />
		</div>
	);
}
