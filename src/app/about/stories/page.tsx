import type { Metadata } from "next";
import { MemberStoriesListClient } from "./MemberStoriesListClient";
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

export default function MemberStoriesListPage() {
  const items = ABOUT_MEMBER_STORIES.map(memberStoryToListItem);

  return (
    <MemberStoriesListClient
      title="成员故事"
      items={items}
      emptyText="暂无成员故事"
    />
  );
}

