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

const TAGS = ["教育", "实践", "成果", "教学", "宣传", "管理", "发展", "实验成果"];

const listItems: LatestListItem[] = Array.from({ length: 6 }).map((_, index) => {
  const source = ACTIVITIES[index % ACTIVITIES.length];
  return {
    id: `${source.id}-${index}`,
    title: source.title,
    date: source.date,
    category: TAGS[index % TAGS.length],
    href: source.link,
  };
});

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
    "inline-flex h-[22px] min-w-[62px] items-center justify-center rounded-[7px] bg-gradient-to-r from-[#0071ef] to-[#149bff] px-2 text-[12px] font-bold text-white tracking-[0.2em]";
  const className = active
    ? `${baseClassName} ring-2 ring-[#005fd0] ring-offset-2 ring-offset-white shadow-[0px_6px_14px_rgba(0,113,239,0.32)]`
    : baseClassName;

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

  return (
    <section className="relative w-full bg-[#f3f3f3] py-0">
      <div className="pointer-events-none absolute left-[-72px] top-[220px] h-[760px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(20,155,255,0.16),_rgba(20,155,255,0)_68%)]" />
      <div className="pointer-events-none absolute left-[-140px] top-[520px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(20,155,255,0.12),_rgba(20,155,255,0)_70%)]" />

      <div className="sticky top-0 z-10 w-full bg-white/95 shadow-[0px_1px_10px_1px_rgba(20,155,255,0.12)] backdrop-blur-[2px]">
        <div className="mx-auto flex h-[54px] w-full max-w-[1172px] items-center px-6 md:px-10 lg:pl-[170px]">
          <h1 className="text-[20px] font-bold leading-none text-[#383838]">最新发布</h1>
          <span className="ml-2 text-[14px] font-bold leading-none text-[#0071ef]">▶</span>
        </div>
      </div>

      <div className="mx-auto mt-3 w-[80%] max-w-[1040px] bg-white px-5 pb-12 pt-6 shadow-[0px_0px_26px_rgba(0,113,239,0.39)] md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1 space-y-6 lg:space-y-7">
            {filteredItems.map((item) => (
              <article key={item.id} className="flex gap-5 md:gap-8">
                <div className="h-[160px] w-[160px] shrink-0 rounded-[10px] bg-[#dff1ff] shadow-[inset_0_0_0_1px_rgba(0,113,239,0.08)] md:h-[224px] md:w-[224px]" />

                <div className="relative -top-6 flex min-w-0 flex-1 flex-col justify-center py-2">
                  <h2 className="line-clamp-2 text-[18px] font-bold leading-[1.2] text-[#383838] md:text-[22px]">
                    {item.title}
                  </h2>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-[12px] font-bold tracking-[0.03em] text-[#646464] md:text-[13px]">
                      {item.date}
                    </span>
                    <CategoryPill
                      label={item.category}
                      href={`/news/list?tag=${encodeURIComponent(item.category)}`}
                      active={selectedTag === item.category}
                    />
                  </div>

                  <Link
                    href={item.href}
                    className="mt-3 inline-flex w-fit text-[12px] font-medium text-[#646464] hover:text-[#0071ef]"
                  >
                    查看全文
                  </Link>
                </div>
              </article>
            ))}

            {filteredItems.length === 0 && (
              <div className="flex min-h-[320px] items-center justify-center text-[13px] font-medium text-[#b6b6b6]">
                暂无该标签内容
              </div>
            )}
          </div>

          <aside className="shrink-0 lg:w-[260px] lg:border-l lg:border-[#d9d9d9] lg:pl-10">
            <h3 className="text-[18px] font-bold text-[#646464]">标签</h3>
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              <CategoryPill label="全部" href="/news/list" active={!selectedTag} />
              {TAGS.map((tag) => (
                <CategoryPill
                  key={tag}
                  label={tag}
                  href={`/news/list?tag=${encodeURIComponent(tag)}`}
                  active={selectedTag === tag}
                />
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-9 flex items-center justify-center gap-7">
          <button type="button" className="text-[30px] leading-none text-[#cecece]" aria-label="上一页">
            ‹
          </button>
          <span className="text-[20px] leading-none text-[#383838]">1/1</span>
          <button type="button" className="text-[30px] leading-none text-[#cecece]" aria-label="下一页">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
