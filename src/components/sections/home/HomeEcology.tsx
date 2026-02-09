import Link from "next/link";

import { HomeIntro } from "@/components/sections/home/HomeIntro";

const ecologyCards = [
  {
    title: "科学研究",
    href: "/ecosystem/research",
    hint: "点击跳转至科学研究",
  },
  {
    title: "工程实践",
    href: "/ecosystem/engineering",
    hint: "点击跳转至工程实践",
  },
  {
    title: "创新生态",
    href: "/ecosystem/innovation",
    hint: "点击跳转至创新生态",
  },
  {
    title: "灵感共生",
    href: "/ecosystem/life",
    hint: "点击跳转至灵感共生",
  },
];

export function HomeEcology() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <HomeIntro title="实验室生态概述与设计感文字占位" desc="说明文字占位" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecologyCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              title={card.hint}
              className="h-[500px] bg-gray-200 rounded flex items-end p-4 text-lg text-gray-700 transition-transform hover:scale-[1.02]"
            >
              {card.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
