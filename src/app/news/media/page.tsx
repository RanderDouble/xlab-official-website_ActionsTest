import type { Metadata } from "next";
import { MediaCoverageListClient } from "./MediaCoverageListClient";
import { MEDIA_QUOTES } from "@/lib/data";
import type { ListPageItem, MediaQuote } from "@/types";

export const metadata: Metadata = {
  title: "媒体关注 - X-Lab",
  description: "X-Lab 媒体关注列表",
};

// ==================== Utility Functions ====================

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

// ==================== Data Transformation ====================

function mediaQuoteToListItem(item: MediaQuote): ListPageItem {
  return {
    id: item.id,
    title: item.title || extractMediaTitle(item.content),
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
    <MediaCoverageListClient
      title="媒体关注"
      items={items}
      emptyText="暂无媒体报道"
    />
  );
}
