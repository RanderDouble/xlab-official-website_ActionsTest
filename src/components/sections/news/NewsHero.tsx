export function NewsHero() {
  return (
    <section className="w-full bg-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-[70%] bg-slate-900 text-white rounded-2xl px-6 py-10 text-center flex flex-col items-center gap-6">
            <div className="text-3xl md:text-4xl font-semibold">2025 X-Lab 年终总结</div>
            <div className="flex items-center w-full gap-4 text-sm text-gray-200">
              <span className="flex-1 h-px bg-gray-500" />
              一句话总结 —— 2025 年会图片
              <span className="flex-1 h-px bg-gray-500" />
            </div>
            <button className="bg-purple-200 text-purple-900 px-6 py-2 rounded-full cursor-pointer">
              去看看 &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
