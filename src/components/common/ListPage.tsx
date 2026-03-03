"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { ListPageItem } from "@/types";

// 默认卡片渲染函数
function DefaultListItemCard({ item }: { item: ListPageItem }) {
  return (
    <article className="group flex gap-7">
      <div className="h-[160px] w-[200px] shrink-0 overflow-hidden rounded-[8px] bg-[#dff1ff] shadow-inner">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-1">
        <h2 className="line-clamp-2 text-[20px] font-bold leading-[1.4] text-[#333] transition-colors group-hover:text-[#0071ef]">
          {item.title}
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[12px] font-medium text-[#999]">{item.date}</span>
          {item.category && (
            <span className="inline-flex h-[22px] min-w-[52px] items-center justify-center rounded-[7px] bg-gradient-to-r from-[#0071ef] to-[#149bff] px-1 text-[13px] font-black text-white tracking-[0.2em]">
              <span className="pl-[0.35em]">{item.category}</span>
            </span>
          )}
        </div>

        {item.summary && (
          <p className="mt-2 line-clamp-2 text-[13px] text-[#666]">{item.summary}</p>
        )}

        <div className="mt-auto pt-2">
          <Link
            href={item.link}
            className="inline-flex items-center text-[13px] font-medium text-[#666] transition-colors hover:text-[#0071ef]"
          >
            阅读详情 <span className="ml-1 text-[10px] transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

interface ListPageProps {
  title: string;
  items: ListPageItem[];
  emptyText?: string;
  // 自定义卡片渲染函数（可选）
  renderItem?: (item: ListPageItem) => ReactNode;
}

export function ListPage({
  title,
  items,
  emptyText = "暂无内容",
  renderItem,
}: ListPageProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#f3f3f3] pb-20">
      {/* SVG背景图 - 宽度100%，高度不够时自动平铺 */}
      <div
        className="pointer-events-none absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-repeat"
        style={{ backgroundImage: "url(/assets/news/Background.svg)" }}
      />

      {/* 顶部标题栏 - 居中，带灰色箭头装饰 */}
      <div className="sticky top-0 z-20 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
        <div className="mx-auto flex h-[54px] max-w-[1000px] items-center justify-center">
          <div className="flex items-center gap-1">
            <h1 className="text-[20px] font-bold leading-none text-[#383838]">{title}</h1>
            <span className="text-[26px] font-normal leading-none text-[#0071ef] translate-y-[-2px]">›</span>
          </div>
        </div>
      </div>

      {/* 列表内容 */}
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

          {/* 分页 */}
          {items.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-8 border-t border-dashed border-[#eee] pt-8">
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] hover:bg-[#f0f7ff] hover:text-[#0071ef]">‹</button>
              <span className="text-[14px] font-bold text-[#333]">1 / 1</span>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] hover:bg-[#f0f7ff] hover:text-[#0071ef]">›</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
