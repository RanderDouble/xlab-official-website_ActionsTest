export function TalentOutcomes() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">X-Lab人才培育体系</h2>
          <p className="text-gray-600 mt-2">关于人才培育成果的简要说明占位文本。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-black/80 rounded-lg p-6 min-h-[260px] flex items-end text-lg">
            人才去向
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-black/80 rounded-lg p-6 min-h-[120px]">
              补充文本说明 A
            </div>
            <div className="border border-black/80 rounded-lg p-6 min-h-[120px]">
              补充文本说明 B
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
