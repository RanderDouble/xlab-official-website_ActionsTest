import Link from "next/link";
import { SPECIAL_COLUMNS } from "@/lib/data";

export function ColumnEntry() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex gap-6">
          {/* 左侧竖排"专栏"文字 */}
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold text-gray-900 writing-mode-vertical-rl" style={{ writingMode: 'vertical-rl' }}>
              专栏
            </h2>
          </div>

          {/* 右侧专栏图片 */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIAL_COLUMNS.map((column) => (
              <Link
                key={column.id}
                href={column.link}
                className="group border border-gray-900 rounded-xl overflow-hidden bg-white relative transition-transform hover:scale-[1.02] hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                  {column.title} 头图
                </div>
                <div className="p-4 text-lg font-semibold text-gray-900">{column.title}</div>
                {/* 右下角more>> */}
                <div className="absolute bottom-4 right-4 text-sm text-gray-600 group-hover:text-gray-900">
                  more&gt;&gt;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
