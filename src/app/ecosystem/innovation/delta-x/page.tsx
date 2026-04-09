import Link from "next/link";
import { DELTA_X_INFO } from "@/lib/data";

export default function DeltaXPage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <Link href="/ecosystem/innovation" className="text-sm text-gray-500 hover:text-blue-600">
          &lt; 返回创业生态
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="border border-gray-900 rounded-lg h-[220px] bg-gray-200 flex items-center justify-center text-sm text-gray-600">
              大图
            </div>
            <div className="border border-gray-900 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900 mb-2">是什么</div>
              <p className="text-sm text-gray-600 leading-6">{DELTA_X_INFO.whatIs}</p>
            </div>
            <div className="border border-gray-900 rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-900 mb-2">能做什么</div>
              <p className="text-sm text-gray-600 leading-6">{DELTA_X_INFO.whatCanDo}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-900 rounded-lg p-4 text-sm text-gray-900">
              说说我们
            </div>
            <div className="border border-gray-900 rounded-lg p-4 h-[200px] flex items-center text-sm text-gray-600">
              {DELTA_X_INFO.vision}
            </div>
            <div className="border border-gray-900 rounded-lg p-4 h-[160px] flex items-center justify-center text-sm text-gray-600">
              欢迎联系（二维码）
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
