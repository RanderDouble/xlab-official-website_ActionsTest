import { LogoWall } from "@/components/common/LogoWall";

export function AboutCooperation() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">合作生态</h2>
          <p className="text-gray-600 mt-2">合作机制与合作院系、企业展示区占位。</p>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 min-w-full">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="min-w-[280px] md:min-w-[360px] h-[200px] border rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 snap-start"
              >
                Case Study {item}
              </div>
            ))}
          </div>
        </div>

        <LogoWall />
      </div>
    </section>
  );
}
