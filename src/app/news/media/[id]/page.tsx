import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/common/DetailPage";
import { MEDIA_ARTICLES, MEDIA_ARTICLE_IDS } from "@/lib/articles/media";

export function generateStaticParams() {
  return MEDIA_ARTICLE_IDS.map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const article = MEDIA_ARTICLES[params.id];
  if (!article) {
    return { title: "报道未找到 - X-Lab" };
  }
  const summary = article.content.find(c => c.type === "paragraph")?.text?.slice(0, 100);
  return {
    title: `${article.title} - ${article.tag || "媒体报道"} - X-Lab`,
    description: summary || "",
  };
}

export default function MediaDetailPage({ params }: { params: { id: string } }) {
  const article = MEDIA_ARTICLES[params.id];

  if (!article) {
    notFound();
  }

  return (
    <DetailPage
      title="媒体关注"
      data={{
        id: article.id,
        title: article.title,
        date: article.date,
        tag: article.tag,
        content: article.content,
      }}
      backLink="/news/media"
    />
  );
}
