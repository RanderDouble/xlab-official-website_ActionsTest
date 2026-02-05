import Link from "next/link";

export function ArticleCard({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <Link href={url} className="border border-gray-900 rounded-lg overflow-hidden bg-white">
      <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
        封面图
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <div className="text-xs text-gray-500 mt-1">摘要占位</div>
      </div>
    </Link>
  );
}
