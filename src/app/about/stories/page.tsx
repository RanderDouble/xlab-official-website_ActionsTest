import Link from "next/link";
import type { Metadata } from "next";
import { ListPage } from "@/components/common/ListPage";
import { ABOUT_MEMBER_STORIES } from "@/lib/data";
import type { ListPageItem, MemberStory } from "@/types";

export const metadata: Metadata = {
  title: "成员故事 - X-Lab",
  description: "X-Lab 成员故事列表",
};

function memberStoryToListItem(item: MemberStory): ListPageItem {
  return {
    id: item.id,
    title: item.title,
    date: "",
    imageUrl: item.imageUrl,
    summary: item.summary,
    category: "成员故事",
    link: item.link,
  };
}

function MemberStoryListCard({ item }: { item: ListPageItem }) {
  return (
    <article className="group flex gap-7">
      <div className="h-[160px] w-[200px] shrink-0 overflow-hidden rounded-[8px] bg-[#dff1ff] shadow-inner">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-1">
        <h2 className="line-clamp-2 text-[20px] font-bold leading-[1.4] text-[#333] transition-colors group-hover:text-[#0071ef]">
          {item.title}
        </h2>
        {item.summary && (
          <p className="mt-3 line-clamp-3 text-[14px] leading-[1.7] text-[#666]">
            {item.summary}
          </p>
        )}

        <div className="mt-auto pt-3">
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] min-w-[112px] items-center justify-center rounded-[6px] bg-gradient-to-r from-[#0071ef] to-[#149bff] px-4 text-[14px] font-bold tracking-[0.15em] text-white"
          >
            查看详情
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function MemberStoriesListPage() {
  const items = ABOUT_MEMBER_STORIES.map(memberStoryToListItem);

  return (
    <ListPage
      title="成员故事"
      items={items}
      emptyText="暂无成员故事"
      renderItem={(item) => <MemberStoryListCard item={item} />}
    />
  );
}

