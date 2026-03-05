import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ACTIVITIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "最新发布 - X-Lab 浙江大学启真交叉学科创新创业实验室",
  description: "X-Lab 最新发布列表页面",
};

type LatestListItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  href: string;
  imageUrl?: string;
};

const listItems: LatestListItem[] = ACTIVITIES.map((source) => ({
  id: `${source.id}`,
  title: source.title,
  date: source.date,
  category: source.category || "其他",
  href: source.link,
  imageUrl: source.imageUrl,
}));

// 从 ACTIVITIES 中提取所有唯一的标签（过滤掉 undefined 和空字符串）
const TAGS = Array.from(new Set(ACTIVITIES.map((a) => a.category).filter((c): c is string => Boolean(c))));

function CategoryPill({
  label,
  href,
  active = false,
}: {
  label: string;
  href?: string;
  active?: boolean;
}) {
  const baseClassName =
    "inline-flex h-[22px] min-w-[52px] items-center justify-center rounded-[7px] bg-gradient-to-r from-[#0071ef] to-[#149bff] px-1 text-[13px] font-black text-white tracking-[0.2em] transition-all duration-200";
  const className = active
    ? `${baseClassName} ring-2 ring-[#005fd0] ring-offset-2 ring-offset-white shadow-[0px_6px_14px_rgba(0,113,239,0.32)]`
    : `${baseClassName} hover:shadow-md hover:brightness-105`;

  const fontStyle = { fontFamily: '"PingFang SC", "Hiragino Sans GB", "Source Han Sans SC", "Microsoft YaHei UI", sans-serif', fontWeight: 900 };

  if (href) {
    return (
      <Link href={href} className={className} style={fontStyle}>
        <span className="pl-[0.35em]">{label}</span>
      </Link>
    );
  }

  return (
    <span className={className} style={fontStyle}>
      <span className="pl-[0.35em]">{label}</span>
    </span>
  );
}

export default async function LatestListPage({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }> | { tag?: string };
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const selectedTag = resolvedSearchParams?.tag?.trim() || "";
  const filteredItems = selectedTag
    ? listItems.filter((item) => item.category === selectedTag)
    : listItems;

  // 统一配置
  const sidebarWidthClass = "w-[200px]";
  const mainContentMaxWidth = "max-w-[1000px]";

  return (
    <section className="relative min-h-screen w-full bg-[#f3f3f3] pb-20">
      {/* SVG背景图 - 宽度100%，高度不够时自动平铺 */}
      <div
        className="pointer-events-none absolute inset-0 w-full bg-[length:100%_auto] bg-top bg-repeat"
        style={{ backgroundImage: "url(/assets/news/Background.svg)" }}
      />

      {/* === 顶部标题栏 - 与ListPage一致：居中，灰色箭头 › === */}
      <div className="sticky top-0 z-20 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
        <div className="flex justify-center">
          {/* Header 左侧占位：保持与下方一致 */}
          <div
            className={`hidden shrink-0 ${sidebarWidthClass} block`}
            aria-hidden="true"
          />

          <div
            className={`flex h-[54px] w-full ${mainContentMaxWidth} items-center justify-center`}
          >
            <div className="flex items-center gap-1">
              <h1 className="text-[20px] font-bold leading-none text-[#383838]">
                活动招募
              </h1>
              <span className="text-[26px] font-normal leading-none text-[#0071ef] translate-y-[-2px]">
                ›
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* === 核心布局区域 === */}
      <div className="flex justify-center pt-8">
        {/* 1. 左侧隐形占位块 */}
        <div
          className={`hidden shrink-0 ${sidebarWidthClass} block`}
          aria-hidden="true"
        />

        {/* 2. 中间容器 */}
        <div
          className={`relative flex w-full ${mainContentMaxWidth} flex-row bg-transparent`}
        >
          {/* 左半部分：文章列表 */}
          <div className="flex-1 bg-white px-10 py-8 shadow-sm">
            <div className="min-h-[400px] space-y-8">
              {filteredItems.map((item) => (
                <article key={item.id} className="group flex gap-7">
                  {/* 图片保持微圆角 */}
                  <div className="h-[160px] w-[200px] shrink-0 overflow-hidden rounded-[8px] bg-[#dff1ff] shadow-inner">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={200}
                        height={160}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff] transition-transform duration-500 group-hover:scale-105" />
                    )}
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col py-1">
                    <h2 className="line-clamp-2 text-[20px] font-bold leading-[1.4] text-[#333] transition-colors group-hover:text-[#0071ef]">
                      {item.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-[12px] font-medium text-[#999]">
                        {item.date}
                      </span>
                      <CategoryPill
                        label={item.category}
                        href={`/news/list?tag=${encodeURIComponent(item.category)}`}
                        active={selectedTag === item.category}
                      />
                    </div>

                    <div className="mt-auto pt-2">
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-[13px] font-medium text-[#666] transition-colors hover:text-[#0071ef]"
                      >
                        阅读详情{" "}
                        <span className="ml-1 text-[10px] transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

              {/* 空状态提示 */}
              {filteredItems.length === 0 && (
                <div className="flex h-full min-h-[320px] w-full items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-[#b6b6b6]">
                    <span className="text-[32px] opacity-50">⟡</span>
                    <span className="text-[13px] font-medium tracking-wide">
                      暂无该标签内容
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 分页 */}
            {filteredItems.length > 0 && (
              <div className="mt-12 flex items-center justify-center gap-8 border-t border-dashed border-[#eee] pt-8">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] hover:bg-[#f0f7ff] hover:text-[#0071ef]"
                >
                  ‹
                </button>
                <span className="text-[14px] font-bold text-[#333]">1 / 1</span>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] hover:bg-[#f0f7ff] hover:text-[#0071ef]"
                >
                  ›
                </button>
              </div>
            )}
          </div>

          {/* 右半部分：侧边栏 */}
          <aside
            className={`shrink-0 self-stretch border-l border-[#f5f5f5] border-r-2 border-r-[#e0e0e0] border-b-2 border-b-[#e0e0e0] bg-white px-6 py-8 shadow-sm ${sidebarWidthClass}`}
          >
            <div className="sticky top-[74px]">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-4 w-1 rounded-full bg-[#0071ef]" />
                <h3 className="text-[16px] font-bold text-[#333]">热门标签</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <CategoryPill
                  label="全部"
                  href="/news/list"
                  active={!selectedTag}
                />
                {TAGS.map((tag) => (
                  <CategoryPill
                    key={tag}
                    label={tag}
                    href={`/news/list?tag=${encodeURIComponent(tag)}`}
                    active={selectedTag === tag}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
