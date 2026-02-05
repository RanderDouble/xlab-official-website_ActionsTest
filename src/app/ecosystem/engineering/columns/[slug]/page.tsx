import { notFound } from "next/navigation";
import { COLUMN_ARTICLES, SPECIAL_COLUMNS } from "@/lib/data";
import { ArticleCard } from "@/components/sections/ecosystem/engineering/ArticleCard";

const columnTitleMap = new Map(
  SPECIAL_COLUMNS.map((item) => [item.id, item.title])
);

export default function ColumnPage({ params }: { params: { slug: string } }) {
  const articles = COLUMN_ARTICLES[params.slug as keyof typeof COLUMN_ARTICLES];
  const title = columnTitleMap.get(params.slug);

  if (!articles || !title) {
    notFound();
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <div className="border border-gray-900 rounded-lg px-4 py-3 text-xl font-semibold">
          {title}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <ArticleCard key={item.id} title={item.title} url={item.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
