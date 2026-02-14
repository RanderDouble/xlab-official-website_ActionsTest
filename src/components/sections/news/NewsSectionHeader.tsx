import Link from "next/link";

type NewsSectionHeaderProps = {
  title: string;
  subtitle: string;
  href: string;
};

export function NewsSectionHeader({ title, subtitle, href }: NewsSectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img alt="" className="h-10 w-10" src="/assets/logo.svg" />
        <div className="space-y-0.5">
          <div className="text-lg md:text-[22px] font-semibold text-[#383838]">
            {title}
          </div>
          <div className="text-[11px] md:text-[12px] text-[#383838]">{subtitle}</div>
        </div>
      </div>
      <Link className="flex items-center gap-2.5 text-[12px] md:text-[13px] font-semibold text-[#cecece] hover:text-[#0071ef]" href={href}>
        <span>查看全部</span>
        <span className="text-[15px] leading-none text-[#0071ef]">&gt;</span>
      </Link>
    </div>
  );
}
