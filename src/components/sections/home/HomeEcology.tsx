import { HomeIntro } from "@/components/sections/home/HomeIntro";

const ecologyCards = [
  "科学研究",
  "工程实践",
  "创新生态",
  "灵感共生",
];

export function HomeEcology() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <HomeIntro title="实验室生态概述与设计感文字占位" desc="说明文字占位" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecologyCards.map((title) => (
            <div
              key={title}
              className="h-[500px] bg-gray-200 rounded flex items-end p-4 text-lg text-gray-700 transition-transform hover:scale-[1.02]"
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
