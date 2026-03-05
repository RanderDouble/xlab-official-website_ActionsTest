import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/common/DetailPage";
import { LATEST_ARTICLES, LATEST_ARTICLE_IDS } from "@/lib/articles/latest";

export function generateStaticParams() {
  return LATEST_ARTICLE_IDS.map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const article = LATEST_ARTICLES[params.id];
  if (!article) {
    return { title: "文章未找到 - X-Lab" };
  }
  const summary = article.content.find(c => c.type === "paragraph")?.text?.slice(0, 100);
  return {
    title: `${article.title} - X-Lab`,
    description: summary || "",
  };
}

export default function LatestDetailPage({ params }: { params: { id: string } }) {
  const article = LATEST_ARTICLES[params.id];

  if (!article) {
    notFound();
  }

  return (
    <DetailPage
      title="最新发布"
      data={{
        id: article.id,
        title: article.title,
        date: article.date,
        tag: article.tag,
        content: article.content,
      }}
      backLink="/news/latest"
    />
  );
}
