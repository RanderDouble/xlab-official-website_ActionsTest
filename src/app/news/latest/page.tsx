import type { Metadata } from "next";
import { ListPage } from "@/components/common/ListPage";
import { FEATURED_NEWS } from "@/lib/data";
import type { ListPageItem, NewsItem } from "@/types";

export const metadata: Metadata = {
  title: "最新发布 - X-Lab",
  description: "X-Lab 最新发布列表",
};

function newsToListItem(item: NewsItem): ListPageItem {
  return {
    id: item.id,
    title: item.title,
    date: item.date,
    imageUrl: item.imageUrl,
    summary: item.summary,
    category: item.category,
    link: `/news/latest/${item.id}`,
  };
}

export default function LatestNewsPage() {
  const items = FEATURED_NEWS.map(newsToListItem);

  return (
    <ListPage
      title="最新发布"
      items={items}
      emptyText="暂无新闻"
      backHref="/news"
    />
  );
}
