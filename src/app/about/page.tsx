import { AboutHero } from "@/components/sections/about/AboutHero";
import { OrganizationStructure } from "@/components/sections/about/OrganizationStructure";
import { HomeTeamContainer } from "@/components/sections/about/HomeTeamContainer";
import { TalentSystem } from "@/components/sections/about/TalentSystem";
import { ResearchModel } from "@/components/sections/about/ResearchModel";
import { TalentPath } from "@/components/sections/about/TalentPath";
import { MemberDestinations } from "@/components/sections/about/MemberDestinations";
import { MemberStories } from "@/components/sections/about/MemberStories";
import { AboutCooperation } from "@/components/sections/about/AboutCooperation";
import { StackingSection, StackingContainer } from "@/components/common/StackingSection";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* Background layer */}
      <div
        className="absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-no-repeat"
        style={{ backgroundImage: "url(/assets/about/BackGround.svg)" }}
      />
      {/* Content layer */}
      <div className="relative z-10">
        <StackingContainer>
          <StackingSection zIndex={10}>
            <AboutHero />
          </StackingSection>
          <StackingSection zIndex={20}>
            <OrganizationStructure />
          </StackingSection>
          <StackingSection zIndex={30}>
            <HomeTeamContainer />
          </StackingSection>
          <StackingSection zIndex={40}>
            <TalentSystem />
          </StackingSection>
        </StackingContainer>
        <ResearchModel />
        <TalentPath />
        <MemberDestinations />
        <MemberStories />
        <AboutCooperation />
      </div>
    </div>
  );
}
