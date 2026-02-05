import { LAB_MERCH } from "@/lib/data";

export function MerchGrid() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">文创周边</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LAB_MERCH.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-6 flex gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
                图
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-600 mt-2">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
