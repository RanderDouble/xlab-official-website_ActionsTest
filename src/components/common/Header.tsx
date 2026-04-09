"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
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
      { label: "创业生态", href: "/ecosystem/innovation" },
      { label: "生活在Lab", href: "/ecosystem/life" },
    ],
  },
  { label: "新闻动态", href: "/news" },
];

export function Header() {
  const pathname = usePathname();
  const [ecoOpen, setEcoOpen] = useState(false);
  const ecoItemRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleEcoEnter = () => setEcoOpen(true);
  const handleEcoLeave = () => setEcoOpen(false);

  // 根据生态建设导航项的位置，计算下拉列的左偏移
  const getDropdownColumnLeft = () => {
    if (!ecoItemRef.current) return undefined;
    const rect = ecoItemRef.current.getBoundingClientRect();
    return rect.left;
  };

  return (
    <header className="relative w-full flex flex-col items-center bg-white pt-2">
      <div className="w-full px-10">
        <div className="h-20 flex justify-between items-center">
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
                  ref={ecoItemRef}
                  key={item.label}
                  onMouseEnter={handleEcoEnter}
                  onMouseLeave={handleEcoLeave}
                  className="h-full flex items-center cursor-default"
                >
                  <span
                    className={`text-[14px] font-semibold border-b-2 ${isActive(item.href) ? "text-blue-600 border-blue-600" : "border-transparent text-gray-700"}`}
                  >
                    {item.label}
                  </span>
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

          <a
            href="https://zju-xlab.feishu.cn/wiki/AkHJw4DiWi2I5mkyLvRccNIcnBf?open_in_browser=true"
            target="_blank"
            rel="noreferrer"
            className="ml-6 -mr-4 -mt-1 block"
            aria-label="打开 X-share"
          >
            <img
              src="/assets/header/XShare.svg"
              alt="XShare"
              width="160"
              height="160"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* 全宽渐变下拉菜单 */}
      <div
        ref={dropdownRef}
        onMouseEnter={handleEcoEnter}
        onMouseLeave={handleEcoLeave}
        className={`
          absolute left-0 right-0 z-50
          bg-gradient-to-r from-gray-200/80 to-gray-900/90
          overflow-hidden
          transition-all duration-700 ease-in-out
          ${ecoOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{ top: "88px" }}
      >
        <div
          className="flex flex-col py-3"
          style={{ paddingLeft: `${getDropdownColumnLeft()}px` }}
        >
          {navItems
            .find((item) => item.children)
            ?.children?.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className={`
                  py-2.5 pr-8 text-sm font-medium
                  transition-colors duration-150
                  ${isActive(child.href) ? "text-blue-300" : "text-gray-200 hover:text-white"}
                `}
              >
                {child.label}
              </Link>
            ))}
        </div>
      </div>
    </header>
  );
}
