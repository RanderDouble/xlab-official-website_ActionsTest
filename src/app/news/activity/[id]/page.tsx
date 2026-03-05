import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/common/DetailPage";
import { ACTIVITY_ARTICLES, ACTIVITY_ARTICLE_IDS } from "@/lib/articles/activity";

export function generateStaticParams() {
  return ACTIVITY_ARTICLE_IDS.map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const article = ACTIVITY_ARTICLES[params.id];
  if (!article) {
    return { title: "活动未找到 - X-Lab" };
  }
  return {
    title: `${article.title} - X-Lab`,
    description: `活动时间：${article.date}`,
  };
}

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  const article = ACTIVITY_ARTICLES[params.id];

  if (!article) {
    notFound();
  }

  return (
    <DetailPage
      title="活动招募"
      data={{
        id: article.id,
        title: article.title,
        date: article.date,
        tag: article.tag,
        content: article.content,
      }}
      backLink="/news/activity"
    />
  );
}
