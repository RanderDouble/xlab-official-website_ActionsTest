"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ResourceTab = "venue" | "digital";

const FEATURED_MENTOR = {
  name: "邢以群",
  roleLines: "导师称谓导师称谓导师称谓导师称谓导师称谓导师称谓",
  imageUrl: "/assets/home/resources/邢以群.png",
};

const ACADEMIC_MENTORS = Array.from({ length: 6 }).map((_, index) => ({
  id: `academic-${index + 1}`,
  name: "导师姓名",
  role: "导师称谓导师称谓",
  imageUrl: "/assets/home/resources/导师.png",
}));

const INDUSTRY_MENTORS = Array.from({ length: 6 }).map((_, index) => ({
  id: `industry-${index + 1}`,
  name: "导师姓名",
  role: "导师称谓导师称谓",
  imageUrl: "/assets/home/resources/导师.png",
}));

const VENUE_CARDS = Array.from({ length: 4 }).map((_, index) => ({
  id: `venue-${index + 1}`,
  title: "X-Lab场地设备占位占位占位占位",
  summary: "注 解 注 解 注 解 注 解 注 解 ...",
  imageUrl: "/assets/home/resources/设备.png",
  href: "/ecosystem/engineering",
}));

const DIGITAL_CARDS = Array.from({ length: 4 }).map((_, index) => ({
  id: `digital-${index + 1}`,
  title: "X-Lab数字资源占位占位占位占位",
  summary: "注 解 注 解 注 解 注 解 注 解 ...",
  imageUrl: "/assets/home/resources/设备.png",
  href: "/ecosystem/research",
}));

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (src.startsWith("/public/")) {
    return src.replace("/public", "");
  }
  return src;
};

function MentorCard({
  name,
  role,
  imageUrl,
}: {
  name: string;
  role: string;
  imageUrl?: string;
}) {
  const resolvedSrc = resolveImageSrc(imageUrl);

  return (
    <article className="relative h-[170px] w-[120px] shrink-0 overflow-hidden rounded-[9.711px] shadow-[0px_1.942px_1.942px_rgba(0,0,0,0.25)]">
      {resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#dddddd] text-[14px] font-bold text-[#646464]">
          头像占位
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-[40px] bg-black/72" />
      <div className="absolute bottom-[27px] left-1/2 h-[29px] w-[98px] -translate-x-1/2 bg-gradient-to-r from-[#0071ef] to-[#149bff] shadow-[0px_1.942px_1.942px_rgba(0,0,0,0.25)]" />
      <p className="absolute inset-x-0 bottom-[36px] whitespace-nowrap text-center text-[16px] font-bold leading-none text-white">
        {name}
      </p>
      <p className="absolute bottom-[5px] left-1/2 w-[100px] -translate-x-1/2 text-center text-[12px] font-bold leading-none text-white">
        {role}
      </p>
    </article>
  );
}

function AutoRail({
  children,
  duration,
  gapClass,
}: {
  children: React.ReactNode;
  duration: number;
  gapClass: string;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max ${gapClass} animate-marquee`}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function HomeResources() {
  const [resourceTab, setResourceTab] = useState<ResourceTab>("venue");
  const [isTabSwitching, setIsTabSwitching] = useState(false);

  const handleResourceTabChange = (nextTab: ResourceTab) => {
    if (nextTab === resourceTab || isTabSwitching) return;
    setIsTabSwitching(true);

    window.setTimeout(() => {
      setResourceTab(nextTab);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTabSwitching(false));
      });
    }, 140);
  };

  const featuredMentorImage = resolveImageSrc(FEATURED_MENTOR.imageUrl);
  const activeResourceCards = useMemo(
    () => (resourceTab === "venue" ? VENUE_CARDS : DIGITAL_CARDS),
    [resourceTab],
  );

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-4 pb-[32px] pt-[52px] md:px-8 lg:px-[60px]">
        <div className="flex items-start gap-3">
          <img
            src="/assets/Logo.svg"
            alt=""
            aria-hidden="true"
            className="h-[40px] w-[40px]"
          />
          <div>
            <h2 className="text-[24px] font-bold leading-none text-[#383838]">
              实验室资源
            </h2>
            <p className="mt-[4px] text-[16px] font-bold leading-none text-[#383838]">
              Laboratory Resources
            </p>
          </div>
        </div>

        <div className="mt-[10px] min-h-[560px] bg-white px-[20px] py-[13px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-[312px_468px] lg:justify-between">
            <div className="relative h-[470px] w-[312px] rounded-[25px] bg-gradient-to-b from-white to-[#9fdcff] p-[2px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:ml-[72px]">
              <div className="absolute left-1/2 top-[8px] h-[338px] w-[296px] -translate-x-1/2 overflow-hidden rounded-tl-[25px] rounded-tr-[25px]">
                {featuredMentorImage ? (
                  <img
                    src={featuredMentorImage}
                    alt={FEATURED_MENTOR.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#dddddd] text-[18px] font-bold text-[#646464]">
                    导师大图占位
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-1/2 h-[120px] w-[340px] -translate-x-1/2 rounded-[15px] bg-gradient-to-t from-black via-black/80 to-black/35" />
              <div className="absolute left-1/2 top-[338px] h-[48px] w-[176px] -translate-x-1/2 bg-gradient-to-r from-[#0071ef] to-[#149bff] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
              <p className="absolute left-1/2 top-[347px] -translate-x-1/2 whitespace-nowrap text-[27px] font-bold leading-none text-white">
                {FEATURED_MENTOR.name}
              </p>
              <p className="absolute left-1/2 top-[406px] w-[230px] -translate-x-1/2 text-center text-[16px] font-bold leading-none text-white">
                {FEATURED_MENTOR.roleLines}
              </p>
            </div>

            <div className="relative w-[468px] lg:left-[-64px]">
              <div>
                <p className="text-[24px] font-bold leading-none text-[#383838]">
                  学术导师
                </p>
                <div className="mt-[9px] h-[5px] w-[96px] rounded-[1px] bg-[#0071ef]" />
                <div className="mt-[18px] w-[468px] overflow-hidden">
                  <AutoRail duration={24} gapClass="gap-[16px]">
                    {ACADEMIC_MENTORS.map((item) => (
                      <MentorCard
                        key={item.id}
                        name={item.name}
                        role={item.role}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                  </AutoRail>
                </div>
              </div>

              <div className="mt-[30px]">
                <p className="text-[24px] font-bold leading-none text-[#383838]">
                  产业导师
                </p>
                <div className="mt-[9px] h-[5px] w-[96px] rounded-[1px] bg-[#0071ef]" />
                <div className="mt-[18px] w-[468px] overflow-hidden">
                  <AutoRail duration={26} gapClass="gap-[16px]">
                    {INDUSTRY_MENTORS.map((item) => (
                      <MentorCard
                        key={item.id}
                        name={item.name}
                        role={item.role}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                  </AutoRail>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[44px] flex items-end justify-between">
          <div className="flex items-end gap-[30px]">
            <button
              type="button"
              onClick={() => handleResourceTabChange("venue")}
              className={`text-[24px] font-bold leading-none ${resourceTab === "venue" ? "text-[#333333]" : "text-[#7a7a7a]"}`}
            >
              场地设备
            </button>
            <button
              type="button"
              onClick={() => handleResourceTabChange("digital")}
              className={`text-[24px] font-bold leading-none ${resourceTab === "digital" ? "text-[#383838]" : "text-[#7a7a7a]"}`}
            >
              数字资源
            </button>
          </div>

          <Link
            href="/ecosystem/engineering"
            className="inline-flex items-center gap-2 text-[16px] font-bold leading-none text-[#cecece]"
          >
            查看全部
            <span className="text-[26px] font-normal leading-none text-[#0071ef]">
              ›
            </span>
          </Link>
        </div>
        <div
          className="mt-[12px] h-[5px] w-[96px] rounded-[1px] bg-[#0071ef]"
          style={{ marginLeft: resourceTab === "venue" ? 0 : 126 }}
        />

        <div className="mt-[18px] overflow-hidden">
          <div className={`w-full transition-opacity duration-300 ${isTabSwitching ? "opacity-0" : "opacity-100"}`}>
            <AutoRail duration={30} gapClass="gap-[33px] pb-[8px]">
              {activeResourceCards.map((item) => {
                const venueImage = resolveImageSrc(item.imageUrl);

                return (
                  <article
                    key={item.id}
                    className="relative h-[270px] w-[410px] shrink-0 overflow-hidden rounded-[25px] border border-[#f3f3f3] shadow-[0px_0px_16px_rgba(79,79,79,0.11)]"
                  >
                    {venueImage ? (
                      <img
                        src={venueImage}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#d7d7d7] text-[20px] font-bold text-[#646464]">
                        场地图片占位
                      </div>
                    )}

                    <div className="absolute inset-x-0 -bottom-[2px] h-[72px] rounded-b-[25px] bg-white" />
                    <p className="absolute left-[20px] top-[212px] text-[16px] font-bold leading-none text-black">
                      {item.title}
                    </p>
                    <p className="absolute left-[20px] top-[237px] text-[12px] font-bold leading-none tracking-[0.3em] text-[#888888]">
                      {item.summary}
                    </p>

                    <Link
                      href={item.href}
                      className="absolute right-[18px] top-[220px] inline-flex h-[30px] w-[100px] items-center justify-center rounded-[5px] bg-gradient-to-r from-[#0071ef] to-[#149bff] text-[14px] font-bold leading-none tracking-[0.3em] text-white"
                    >
                      <span className="pl-[0.3em]">查看详情</span>
                    </Link>
                  </article>
                );
              })}
            </AutoRail>
          </div>
        </div>
      </div>
    </section>
  );
}
