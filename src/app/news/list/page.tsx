import Link from "next/link";
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
};

const TAGS = [
  "教育",
  "实践",
  "成果",
  "教学",
  "宣传",
  "管理",
  "发展",
  "实验成果",
];

const listItems: LatestListItem[] = Array.from({ length: 6 }).map(
  (_, index) => {
    const source = ACTIVITIES[index % ACTIVITIES.length];
    return {
      id: `${source.id}-${index}`,
      title: source.title,
      date: source.date,
      category: TAGS[index % TAGS.length],
      href: source.link,
    };
  },
);

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
    "inline-flex h-[22px] min-w-[52px] items-center justify-center rounded-[7px] bg-gradient-to-r from-[#0071ef] to-[#149bff] px-1 text-[12px] font-bold text-white tracking-[0.2em] transition-all duration-200";
  const className = active
    ? `${baseClassName} ring-2 ring-[#005fd0] ring-offset-2 ring-offset-white shadow-[0px_6px_14px_rgba(0,113,239,0.32)]`
    : `${baseClassName} hover:shadow-md hover:brightness-105`;

  if (href) {
    return (
      <Link href={href} className={className}>
        <span className="pl-[0.35em]">{label}</span>
      </Link>
    );
  }

  return (
    <span className={className}>
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

  // --- 关键配置调整 ---
  // 1. 侧边栏宽度：增加到 240px (之前是 220px)，配合左侧占位，会挤压中间空间
  const sidebarWidthClass = "lg:w-[200px]";
  // 2. 总容器最大宽度：减小到 1000px (之前是 1100px)，进一步限制列表宽度
  const mainContentMaxWidth = "max-w-[1000px]";

  return (
    <section className="relative min-h-screen w-full bg-[#f3f3f3] pb-20">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute left-[-72px] top-[220px] h-[760px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(20,155,255,0.16),_rgba(20,155,255,0)_68%)]" />
      <div className="pointer-events-none absolute left-[-140px] top-[520px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(20,155,255,0.12),_rgba(20,155,255,0)_70%)]" />

      {/* === 顶部标题栏 === */}
      <div className="sticky top-0 z-20 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
        <div className="flex justify-center px-4 md:px-6">
          {/* Header 左侧占位：保持与下方一致 */}
          <div
            className={`hidden shrink-0 ${sidebarWidthClass} lg:block`}
            aria-hidden="true"
          />

          <div
            className={`flex h-[54px] w-full ${mainContentMaxWidth} items-center`}
          >
            {/* 这里的 pl 需要与下面列表容器的 px 保持视觉对齐 */}
            <div className="pl-5 md:pl-8 lg:pl-10">
              <div className="flex items-center">
                <h1 className="text-[20px] font-bold leading-none text-[#383838]">
                  最新发布
                </h1>
                <span className="ml-2 text-[14px] font-bold leading-none text-[#0071ef]">
                  ▶
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === 核心布局区域 === */}
      <div className="flex justify-center px-4 pt-8 md:px-6">
        {/* 1. 左侧隐形占位块 */}
        <div
          className={`hidden shrink-0 ${sidebarWidthClass} lg:block`}
          aria-hidden="true"
        />

        {/* 2. 中间容器 (去掉了圆角) */}
        <div
          className={`flex w-full ${mainContentMaxWidth} flex-col bg-white shadow-[0px_0px_26px_rgba(0,113,239,0.15)] lg:flex-row lg:bg-transparent lg:shadow-none`}
        >
          {/* 左半部分：文章列表 
             修改：移除了所有 rounded 类，保持方正
          */}
          <div className="flex-1 bg-white px-5 py-8 shadow-sm md:px-8 lg:px-10">
            <div className="min-h-[400px] space-y-8">
              {filteredItems.map((item) => (
                <article key={item.id} className="group flex gap-5 md:gap-7">
                  {/* 图片保持微圆角，视觉上更好看，如果这里也要方正可以把 rounded-[8px] 去掉 */}
                  <div className="h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[8px] bg-[#dff1ff] shadow-inner md:h-[160px] md:w-[200px]">
                    <div className="h-full w-full bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff] transition-transform duration-500 group-hover:scale-105" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col py-1">
                    <h2 className="line-clamp-2 text-[17px] font-bold leading-[1.4] text-[#333] transition-colors group-hover:text-[#0071ef] md:text-[20px]">
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

              {/* 空状态提示：恢复显示
                 当 filteredItems 为空时显示 
              */}
              {filteredItems.length === 0 && (
                <div className="flex h-full min-h-[320px] w-full items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-[#b6b6b6]">
                    {/* 一个简单的图标，可选 */}
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

          {/* 右半部分：侧边栏 
             修改：移除了 rounded 类
          */}
          <aside
            className={`shrink-0 border-t border-[#f5f5f5] bg-white px-6 py-8 lg:border-l lg:border-t-0 ${sidebarWidthClass}`}
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
