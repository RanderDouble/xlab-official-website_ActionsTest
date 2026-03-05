"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { DetailPageData, DetailContentBlock } from "@/types";

// ==================== Types ====================

interface DetailPageProps {
  title: string; // 顶部导航栏标题
  data: DetailPageData;
  showLogoWatermark?: boolean; // 是否显示右下角 Logo 水印
  backLink?: string; // 返回链接（默认 /news）
  renderContent?: (block: DetailContentBlock) => ReactNode; // 自定义内容渲染
}

// ==================== Sub-components ====================

// 顶部标题栏 - 与 ListPage 一致，居中+箭头装饰
function DetailHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-20 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
      <div className="mx-auto flex h-[54px] max-w-[1000px] items-center justify-center">
        <div className="flex items-center gap-1">
          <h1 className="text-[20px] font-bold leading-none text-[#383838]">{title}</h1>
          <span className="text-[26px] font-normal leading-none text-[#0071ef] translate-y-[-2px]">›</span>
        </div>
      </div>
    </div>
  );
}

// 文章标题区 - 标签+日期+主标题+分隔线
function ArticleHeader({
  title,
  date,
  tag,
}: {
  title: string;
  date: string;
  tag?: string;
}) {
  return (
    <header className="relative px-16 pt-16 pb-6">
      {/* 标签+日期行 */}
      <div className="mb-6 flex items-center justify-center gap-4">
        {tag && (
          <span className="bg-gradient-to-r from-[#0071ef] to-[#149bff] bg-clip-text text-[20px] font-medium tracking-[1.6px] text-transparent">
            {tag}
          </span>
        )}
        <span className="text-[20px] tracking-[1.6px] text-[#646464]">
          {date}
        </span>
      </div>

      {/* 主标题 */}
      <h1 className="mb-8 text-center text-[32px] font-bold leading-[1.4] text-[#383838]">
        {title}
      </h1>

      {/* 分隔线 */}
      <div className="mx-auto h-[1px] w-[640px] max-w-full bg-gradient-to-r from-transparent via-[#0071ef]/30 to-transparent" />
    </header>
  );
}

// 默认内容块渲染器
function DefaultContentBlock({ block }: { block: DetailContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-7 text-[14px] leading-relaxed indent-7 text-[#383838]">
          {block.text}
        </p>
      );
    case "image":
      return (
        <figure className="my-8">
          <img
            src={block.src}
            alt={block.alt || ""}
            className="w-full rounded-[10px]"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-[12px] text-[#cecece]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "subheading":
      return (
        <h2 className="mb-4 mt-8 text-[18px] font-bold text-[#383838]">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-[#0071ef] bg-[#f0f7ff] px-6 py-4 italic text-[#555]">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

// 文章内容区
function ArticleContent({
  content,
  renderContent,
}: {
  content: DetailContentBlock[];
  renderContent?: (block: DetailContentBlock) => ReactNode;
}) {
  return (
    <div className="px-16 pb-16">
      {content.map((block, index) => (
        <div key={index}>
          {renderContent ? renderContent(block) : <DefaultContentBlock block={block} />}
        </div>
      ))}
    </div>
  );
}

// Logo 水印
function LogoWatermark() {
  return (
    <div className="pointer-events-none absolute bottom-[140px] right-[80px] opacity-[0.15]">
      {/* X·Lab Logo 占位符 */}
      <div className="flex items-center gap-2">
        <span className="text-[60px] font-black text-[#0071ef]">X</span>
        <span className="text-[40px] text-[#0071ef]">·</span>
        <span className="text-[40px] font-bold text-[#0071ef]">Lab</span>
      </div>
    </div>
  );
}

// ==================== Main Component ====================

export function DetailPage({
  title,
  data,
  showLogoWatermark = true,
  backLink = "/news",
  renderContent,
}: DetailPageProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#f3f3f3] pb-20">
      {/* SVG背景图 - 宽度100%，高度不够时自动平铺 */}
      <div
        className="pointer-events-none absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-repeat"
        style={{ backgroundImage: "url(/assets/news/Background.svg)" }}
      />

      {/* 顶部标题栏 */}
      <DetailHeader title={title} />

      {/* 返回按钮 */}
      <div className="relative mx-auto max-w-[1000px] pt-4">
        <Link
          href={backLink}
          className="inline-flex items-center text-[13px] text-[#666] transition-colors hover:text-[#0071ef]"
        >
          <span className="mr-1">‹</span> 返回列表
        </Link>
      </div>

      {/* 详情内容卡片 */}
      <div className="relative mx-auto mt-4 max-w-[1000px]">
        <div className="relative bg-white shadow-[0px_0px_26px_0px_rgba(0,113,239,0.39)]">
          {/* 文章标题区 */}
          <ArticleHeader title={data.title} date={data.date} tag={data.tag} />

          {/* 文章内容区 */}
          <ArticleContent content={data.content} renderContent={renderContent} />

          {/* Logo 水印 */}
          {showLogoWatermark && <LogoWatermark />}
        </div>
      </div>
    </section>
  );
}

// ==================== Simple HTML Version ====================

interface DetailPageSimpleProps {
  title: string;
  htmlContent: string;
  date: string;
  tag?: string;
  showLogoWatermark?: boolean;
  backLink?: string;
}

// 简化版本 - 直接渲染 HTML 内容
export function DetailPageSimple({
  title,
  htmlContent,
  date,
  tag,
  showLogoWatermark = true,
  backLink = "/news",
}: DetailPageSimpleProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#f3f3f3] pb-20">
      {/* SVG背景图 */}
      <div
        className="pointer-events-none absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-repeat"
        style={{ backgroundImage: "url(/assets/news/Background.svg)" }}
      />

      {/* 顶部标题栏 */}
      <DetailHeader title={title} />

      {/* 返回按钮 */}
      <div className="relative mx-auto max-w-[1000px] pt-4">
        <Link
          href={backLink}
          className="inline-flex items-center text-[13px] text-[#666] transition-colors hover:text-[#0071ef]"
        >
          <span className="mr-1">‹</span> 返回列表
        </Link>
      </div>

      {/* 详情内容卡片 */}
      <div className="relative mx-auto mt-4 max-w-[1000px]">
        <div className="relative bg-white shadow-[0px_0px_26px_0px_rgba(0,113,239,0.39)]">
          {/* 文章标题区 */}
          <ArticleHeader title={title} date={date} tag={tag} />

          {/* HTML 内容区 */}
          <div
            className="px-16 pb-16 text-[14px] leading-relaxed text-[#383838] [&_p]:mb-7 [&_p]:indent-7"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Logo 水印 */}
          {showLogoWatermark && <LogoWatermark />}
        </div>
      </div>
    </section>
  );
}
