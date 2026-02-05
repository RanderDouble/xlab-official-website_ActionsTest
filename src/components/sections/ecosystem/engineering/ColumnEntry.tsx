import Link from "next/link";
import { SPECIAL_COLUMNS } from "@/lib/data";

export function ColumnEntry() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">专栏</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIAL_COLUMNS.map((column) => (
            <Link
              key={column.id}
              href={column.link}
              className="group border border-gray-900 rounded-xl overflow-hidden bg-white"
            >
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-sm text-gray-600 transition-transform group-hover:scale-[1.02]">
                {column.title} 头图
              </div>
              <div className="p-4 text-lg font-semibold text-gray-900">{column.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
