import type { Metadata } from "next";
import Link from "next/link";
import { ListPage } from "@/components/common/ListPage";
import { MEDIA_QUOTES } from "@/lib/data";
import type { ListPageItem, MediaQuote } from "@/types";

export const metadata: Metadata = {
  title: "媒体关注 - X-Lab",
  description: "X-Lab 媒体关注列表",
};

// ==================== Utility Functions ====================

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}/${month}/${day}`;
}

function toTimestamp(dateStr: string): number {
  const time = new Date(dateStr).getTime();
  return Number.isNaN(time) ? 0 : time;
}

function extractMediaTitle(content: string): string {
  const text = content.replace(/[“”"]/g, "").trim();
  if (!text) return "媒体报道";

  const firstSegment = text.split(/[：，。！？；]/)[0]?.trim() || text;
  if (firstSegment.length >= 8 && firstSegment.length <= 24) {
    return firstSegment;
  }

  const capped = firstSegment.length > 24 ? firstSegment : text;
  return capped.length > 24 ? `${capped.slice(0, 22)}...` : capped;
}

// ==================== Sub-components ====================

function MediaCard({ item }: { item: ListPageItem }) {
  return (
    <article className="group py-6">
      <div className="grid grid-cols-[minmax(0,652px)_240px] items-start justify-between gap-x-8">
        <div className="min-w-0 w-[652px]">
          <span className="bg-linear-to-r from-[#0071ef] to-[#149bff] bg-clip-text text-[20px] font-bold text-transparent tracking-[0.08em]">
            {item.category}
          </span>
          <h2 className="mt-2 text-[32px] font-bold leading-[1.3] text-[#383838]">
            {item.title}
          </h2>
        </div>

        <div className="grid w-[240px] shrink-0 grid-cols-[64px_120px] items-center gap-14 self-end text-[#646464]">
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[16px] font-medium transition-colors hover:text-[#0071ef]"
          >
            查看原文
          </Link>
          <span className="w-[120px] text-right text-[20px] font-bold tracking-[0.08em] tabular-nums">
            {formatDate(item.date)}
          </span>
        </div>
      </div>

      <div className="mt-4 w-[652px] border-t border-[#CECECE] pt-4">
        {item.summary && (
          <p className="text-[20px] leading-[1.5] text-[#646464]">
            &ldquo;{item.summary}&rdquo;
          </p>
        )}
      </div>
    </article>
  );
}

// ==================== Data Transformation ====================

function mediaQuoteToListItem(item: MediaQuote): ListPageItem {
  return {
    id: item.id,
    title: extractMediaTitle(item.content),
    date: item.date,
    summary: item.content,
    category: item.mediaName,
    link: item.link,
  };
}

// ==================== Main Component ====================

export default function MediaCoveragePage() {
  const items = [...MEDIA_QUOTES]
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
    .map(mediaQuoteToListItem);

  return (
    <ListPage
      title="媒体关注"
      items={items}
      emptyText="暂无媒体报道"
      renderItem={(item) => <MediaCard item={item} />}
    />
  );
}
