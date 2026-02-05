export function ResearchLife() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">X-Laber的科研生活</h2>
          <div className="border border-gray-900 rounded-lg px-4 py-2 text-sm text-gray-500">Logo</div>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="min-w-[280px] md:min-w-[420px] snap-start">
              <div className="h-[240px] bg-gray-200 border border-gray-900 rounded-lg flex items-end justify-center text-sm text-gray-600">
                图片组 {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
