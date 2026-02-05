import Link from "next/link";

export function VentureCard() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">创投生态</h2>
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-10 space-y-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-semibold">DELTA X 进化未来</div>
            <div className="text-sm text-gray-300">你的下一个想法，改变世界的ΔX</div>
          </div>
          <div className="bg-slate-800 rounded-xl px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-200">
              X-Lab创投生态Delta X 迭代未来
            </div>
            <Link
              href="/ecosystem/innovation/delta-x"
              className="text-sm bg-white text-slate-900 px-4 py-2 rounded-full"
            >
              查看详情
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <div className="h-[140px] bg-gray-100 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            飞书二维码
          </div>
          <div className="h-[140px] bg-gray-100 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            Slogan 文本框
          </div>
        </div>
      </div>
    </section>
  );
}
