import { Gramophone } from "@/components/sections/ecosystem/life/Gramophone";
import { MerchGrid } from "@/components/sections/ecosystem/life/MerchGrid";
import { PhotoWall } from "@/components/sections/ecosystem/life/PhotoWall";
import { TravelingMoments } from "@/components/sections/ecosystem/life/TravelingMoments";
import { VideoStories } from "@/components/sections/ecosystem/life/VideoStories";

export default function LifePage() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="h-[220px] md:h-[300px] bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-gray-600">
            Banner
          </div>
        </div>
      </section>
      <VideoStories />
      <TravelingMoments />
      <PhotoWall />
      <MerchGrid />
      <Gramophone />
    </div>
  );
}
