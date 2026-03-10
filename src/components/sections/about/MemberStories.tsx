"use client";

import Link from "next/link";
import { ABOUT_MEMBER_STORIES } from "@/lib/data";

function StoryCard({
  title,
  summary,
  imageUrl,
  link,
}: {
  title: string;
  summary: string;
  imageUrl?: string;
  link: string;
}) {
  return (
    <div className="h-[330px] w-[420px] overflow-hidden rounded-[25px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="h-[238px] w-full bg-gradient-to-br from-[#0071EF] to-[#149BFF]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[16px] text-white/60">
            图片占位
          </div>
        )}
      </div>

      <div className="relative h-[92px] px-[20px] pt-[12px]">
        <h4 className="text-[24px] font-bold leading-[30px] text-black">
          {title}
        </h4>
        <p className="mt-[2px] text-[16px] font-bold leading-[20px] tracking-[1.8px] text-[#888888]">
          {summary}
        </p>
        <a
          href={link}
          className="absolute right-[18px] top-[36px] inline-flex h-[33px] w-[120px] items-center justify-center rounded-[5px] bg-gradient-to-r from-[#0071EF] to-[#149BFF] text-[18px] font-bold tracking-[2.5px] text-white"
        >
          查看详情
        </a>
      </div>
    </div>
  );
}

export function MemberStories() {
  const stories = ABOUT_MEMBER_STORIES;

  return (
    <section className="relative z-30 mt-[-300px] w-full bg-white py-[40px]">
      <div className="relative mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="relative z-40 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img alt="" className="h-12 w-12" src="/assets/logo.svg" />
            <div className="">
              <div className="text-[28px] font-semibold text-[#383838]">
                成员故事
              </div>
              <div className="text-[15px] text-[#383838] mt-[-2px]">Their Stories</div>
            </div>
          </div>
          <Link
            className="relative z-50 flex items-center gap-2.5 text-[15px] font-semibold text-[#cecece] transition-colors hover:text-[#0071ef]"
            href="/about/stories"
          >
            <span>查看全部</span>
            <span className="text-lg leading-none text-[#0071ef]">&gt;</span>
          </Link>
        </div>
        <div className="mt-8 px-[2px] py-[6px]">
          <div className="flex flex-wrap items-start gap-[30px]">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                summary={story.summary}
                imageUrl={story.imageUrl}
                link={story.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
