import Link from "next/link";

type NewsSectionHeaderProps = {
  title: string;
  subtitle: string;
  href: string;
};

export function NewsSectionHeader({ title, subtitle, href }: NewsSectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <img alt="" className="h-12 w-12" src="/assets/logo.svg" />
        <div className="space-y-1">
          <div className="text-2xl md:text-[28px] font-semibold text-[#383838]">
            {title}
          </div>
          <div className="text-sm md:text-[15px] text-[#383838]">{subtitle}</div>
        </div>
      </div>
      <Link className="flex items-center gap-2.5 text-sm md:text-[15px] font-semibold text-[#cecece] hover:text-[#0071ef]" href={href}>
        <span>查看全部</span>
        <span className="text-lg leading-none text-[#0071ef]">&gt;</span>
      </Link>
    </div>
  );
}
