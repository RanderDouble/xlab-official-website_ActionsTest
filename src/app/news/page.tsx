import { ActivityList } from "@/components/sections/news/ActivityList";
import { LatestUpdates } from "@/components/sections/news/LatestUpdates";
import { MediaCoverage } from "@/components/sections/news/MediaCoverage";
import { NewsHero } from "@/components/sections/news/NewsHero";

export default function NewsPage() {
	return (
		<div className="flex flex-col">
			<NewsHero />
			<ActivityList />
			<LatestUpdates />
			<MediaCoverage />
		</div>
	);
}
