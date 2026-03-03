import { MessageBoard } from "@/components/sections/ecosystem/life/MessageBoard";
import { Merchandise } from "@/components/sections/ecosystem/life/MerchCard";
import { PhotoWall } from "@/components/sections/ecosystem/life/PhotoWall";
import { JourneyTogether } from "@/components/sections/ecosystem/life/JourneyTogether";
import { VideoStories } from "@/components/sections/ecosystem/life/VideoStories";
import { Banner } from "@/components/common/Banner";

export default function LifePage() {
  return (
    <div className="flex flex-col">
      <Banner imageSrc="/life/banner.svg" alt="Life Banner" />
      <VideoStories />
      <JourneyTogether />
      <PhotoWall />
      <Merchandise />
      <MessageBoard />
    </div>
  );
}
