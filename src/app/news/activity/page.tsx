import type { Metadata } from "next";
import { ListPage } from "@/components/common/ListPage";
import { ACTIVITIES } from "@/lib/data";
import type { ListPageItem, Activity } from "@/types";

export const metadata: Metadata = {
  title: "活动招募 - X-Lab",
  description: "X-Lab 活动招募列表",
};

function activityToListItem(item: Activity): ListPageItem {
  return {
    id: item.id,
    title: item.title,
    date: item.date,
    imageUrl: item.imageUrl,
    category: item.status === "active" ? "进行中" : "已结束",
    link: `/news/activity/${item.id}`,
  };
}

export default function ActivityListPage() {
  const items = ACTIVITIES.map(activityToListItem);

  return (
    <ListPage
      title="活动招募"
      items={items}
      emptyText="暂无活动"
      backHref="/news"
    />
  );
}
