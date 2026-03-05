"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { ListPageItem } from "@/types";

// 1. 调整后的卡片渲染函数
function DefaultListItemCard({ item }: { item: ListPageItem }) {
  return (
    <Link href={item.link} className="block group"> 
      {/* 点击卡片全区域即可跳转 */}
      <article className="flex gap-7">
        <div className="relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-[8px] bg-[#dff1ff] shadow-inner">
          {item.imageUrl ? (
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]" />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col py-1">
          {/* 标题 */}
          <h2 className="mt-5 line-clamp-2 text-[21px] font-bold leading-[1.4] text-[#333] transition-colors group-hover:text-[#0071ef]">
            {item.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            {/* 日期显示 */}
            <span 
              className="font-bold text-[#646464] tracking-[0.08em]"
              style={{ 
                fontSize: "17px",
                lineHeight: "29px"
              }}
            >
              {item.date}
            </span>

            {item.category && (
              <span className="inline-flex h-[22px] min-w-[52px] items-center justify-center rounded-[7px] bg-gradient-to-r from-[#0071ef] to-[#149bff] px-1 text-[13px] font-black text-white tracking-[0.2em]">
                <span className="pl-[0.35em]">{item.category}</span>
              </span>
            )}
          </div>

          {item.summary && (
            <p className="mt-2 line-clamp-2 text-[13px] text-[#666]">{item.summary}</p>
          )}

          {/* 文本改成“查看全文” */}
          <div className="mt-auto mb-4"> 
            <span className="text-[13px] font-medium text-[#666] transition-colors group-hover:text-[#0071ef]">
              查看全文
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

interface ListPageProps {
  title: string;
  items: ListPageItem[];
  emptyText?: string;
  renderItem?: (item: ListPageItem) => ReactNode;
  backHref?: string;
  backLabel?: string;
  showBackButton?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function ListPage({
  title,
  items,
  emptyText = "暂无内容",
  renderItem,
  backHref,
  backLabel = "返回",
  showBackButton = true,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: ListPageProps) {
  const shouldShowBackButton = showBackButton && Boolean(backHref);

  return (
    <section className="relative min-h-screen w-full bg-white pb-20">
      <div
        className="pointer-events-none absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-repeat"
        style={{ backgroundImage: "url(/engineering/columns/listpage_bg.svg)" }}
      />

      {/* 顶部标题栏 */}
      <div className="sticky top-0 z-20 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
        <div className="mx-auto grid h-[54px] max-w-[1000px] grid-cols-[120px_1fr_120px] items-center">
          <div className="pl-1">
            {shouldShowBackButton ? (
              <Link
                href={backHref!}
                aria-label="返回上一页"
                className="inline-flex h-[32px] items-center gap-1 text-[14px] font-medium text-[#646464] transition-colors hover:text-[#0071ef]"
              >
                <span aria-hidden="true" className="translate-x-0.5 -translate-y-[1.5px] text-[18px] leading-none">‹</span>
                <span>{backLabel}</span>
              </Link>
            ) : null}
          </div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-[20px] text-black font-bold leading-none">{title}</h1>
            <Image 
              src="/triangle.svg" 
              width={14} 
              height={14} 
              alt="triangle" 
              className="leading-none text-[#0071ef] translate-x-[8px]"
            />
          </div>

          <div aria-hidden="true" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1000px] pt-8">
        <div className="bg-white px-10 py-8 shadow-sm">
          <div className="min-h-[400px] space-y-8">
            {items.map((item) =>
              renderItem ? (
                <div key={item.id}>{renderItem(item)}</div>
              ) : (
                <DefaultListItemCard key={item.id} item={item} />
              )
            )}

            {items.length === 0 && (
              <div className="flex h-full min-h-[320px] w-full items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-[#b6b6b6]">
                  <span className="text-[32px] opacity-50">⟡</span>
                  <span className="text-[13px] font-medium tracking-wide">{emptyText}</span>
                </div>
              </div>
            )}
          </div>

          {/* 分页器 */}
          {items.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-6 border-t border-dashed border-[#eee] pt-8">
              <button
                type="button"
                onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`transition-transform hover:scale-110 active:scale-95 ${
                  currentPage === 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"
                }`}
              >
                <Image src="/engineering/left_arrow.svg" width={30} height={50} alt="prev" />
              </button>

              <span className="text-[16px] font-bold text-[#333] tracking-widest">
                {currentPage} / {totalPages}
              </span>

              <button
                type="button"
                onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`transition-transform hover:scale-110 active:scale-95 ${
                  currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "opacity-100"
                }`}
              >
                <Image src="/engineering/right_arrow.svg" width={30} height={50} alt="next" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
