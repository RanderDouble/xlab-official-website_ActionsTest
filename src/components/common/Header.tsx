"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full flex flex-col items-center pt-4">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-20 bg-white flex justify-between items-center px-4 md:px-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/header/Logo.svg"
                alt="Logo"
                className="w-12 h-12"
              />
              <img
                src="/assets/header/Name.svg"
                alt="Name"
                className="h-8 w-auto"
              />
            </div>

            <nav className="flex-1 flex gap-6 items-center text-gray-700 justify-end">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="group relative h-full flex items-center"
                  >
                    <Link
                      className={`cursor-pointer text-[14px] font-semibold hover:text-blue-600 border-b-2 ${isActive(item.href) ? "text-blue-600 border-blue-600" : "border-transparent"}`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                    <div className="hidden group-hover:block absolute top-full left-0 bg-white border shadow-md z-50 min-w-[150px]">
                      <div className="flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            className={`px-4 py-2 text-xs font-semibold text-gray-700 hover:text-blue-600 hover:bg-slate-50 ${isActive(child.href) ? "text-blue-600 bg-slate-50" : ""}`}
                            href={child.href}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={item.label} className="h-full flex items-center">
                    <Link
                      className={`cursor-pointer text-[14px] font-semibold hover:text-blue-600 border-b-2 ${isActive(item.href) ? "text-blue-600 border-blue-600" : "border-transparent"}`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </div>
                ),
              )}
            </nav>

            <img
              src="/assets/header/XShare.svg"
              alt="XShare"
              width="160"
              height="160"
              className="cursor-pointer ml-6 mr-[-16] -mt-1"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
