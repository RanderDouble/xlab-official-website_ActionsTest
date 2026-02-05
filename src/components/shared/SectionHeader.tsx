import Link from "next/link";

export function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <Link className="text-sm text-gray-500 hover:text-blue-600" href={href}>
        查看全部 &gt;
      </Link>
    </div>
  );
}
