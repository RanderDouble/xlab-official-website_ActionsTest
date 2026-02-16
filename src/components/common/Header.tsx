import Link from "next/link";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  {
    label: "生态建设",
    href: "/ecosystem",
    children: [
      { label: "科学研究", href: "/ecosystem/research" },
      { label: "工程实践", href: "/ecosystem/engineering" },
      { label: "创新生态", href: "/ecosystem/innovation" },
      { label: "生活在Lab", href: "/ecosystem/life" },
    ],
  },
  { label: "新闻动态", href: "/news" },
];

export function Header() {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="w-full bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-10 border border-slate-300 rounded-md my-3 flex items-center justify-center text-sm text-gray-600">
            X-Share知识共享
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-20 bg-white border border-slate-300 rounded-md flex justify-between items-center px-4 md:px-6">
            <div className="w-[200px] h-[60px] bg-purple-100 text-purple-700 flex items-center justify-center text-sm rounded">
              logo
            </div>

            <nav className="flex gap-8 items-center text-gray-700">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <span className="cursor-default hover:text-blue-600">
                      {item.label}
                    </span>
                    <div className="hidden group-hover:block absolute top-full left-0 bg-white border shadow-md z-50 min-w-[150px]">
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            className="px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-slate-50"
                            href={child.href}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} className="cursor-pointer hover:text-blue-600" href={item.href}>
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <a className="hover:text-blue-600" href="https://www.zju.edu.cn/" target="_blank" rel="noreferrer">
                  浙江大学官网
                </a>
                <a className="hover:text-blue-600" href="#" target="_self" rel="noreferrer">
                  活动专区
                </a>
              </div>
              <div className="bg-purple-100 px-6 py-1 rounded-full text-sm text-gray-500">搜索栏</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
