import Link from "next/link";

const ECOLOGY_CARDS = [
  { title: "科学研究", href: "/ecosystem/research", imageUrl: "/assets/home/ecosystem/科学研究.png" },
  { title: "工程实践", href: "/ecosystem/engineering", imageUrl: "/assets/home/ecosystem/工程实践.png" },
  { title: "创业生态", href: "/ecosystem/innovation", imageUrl: "/assets/home/ecosystem/创业生态.png" },
  { title: "灵感共生", href: "/ecosystem/life", imageUrl: "/assets/home/ecosystem/灵感共生.png" },
];

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (src.startsWith("/public/")) {
    return src.replace("/public", "");
  }
  return src;
};

export function HomeEcology() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1320px] px-[20px] pt-[52px]">
        <div className="flex items-start gap-3">
          <img
            src="/assets/logo.svg"
            alt=""
            aria-hidden="true"
            className="h-12 w-12"
          />
          <div>
            <h2 className="text-[24px] font-bold leading-none text-[#383838]">实验室生态</h2>
            <p className="mt-[4px] text-[14px] font-bold leading-none text-[#383838]">
              Laboratory Ecosystem
            </p>
          </div>
        </div>

        <p
          className="mt-[24px] ml-[36px] text-[16px] font-bold leading-[2] text-[#383838]"
          style={{ textIndent: "2em" }}
        >
          “汇聚最活跃的创新人才，以多学科力量推动交叉前沿科学研究，以工程技术基础平台助力项目落地，以创业生态孵化成果持续续提升社会福祉；打造集人才培养、交叉研究、工程平台、创业生态于一体的开放创新体系。”
        </p>

        <div className="mt-[20px] grid grid-cols-4 gap-[20px] pb-[10px]">
          {ECOLOGY_CARDS.map((card) => {
            const imageSrc = resolveImageSrc(card.imageUrl);

            return (
              <Link
                key={card.title}
                href={card.href}
                className="relative w-full overflow-hidden rounded-[15px]"
                style={{ aspectRatio: "300 / 412" }}
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={card.title}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#d7d7d7] text-[14px] font-bold text-[#646464]">
                    图片占位
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 flex h-[73px] items-center justify-center bg-black/70">
                  <p className="text-center text-[20px] font-bold leading-none tracking-[0.15em] text-white">
                    {card.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
