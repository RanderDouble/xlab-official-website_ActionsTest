"use client";

import { useState } from "react";
import Link from "next/link";
import { ENGINEERING_TEXT_NEWS, ENGINEERING_IMAGE_NEWS} from "@/lib/data"


export function EngineeringNewsDetail() {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <section className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-8">
        {/* 标题 */}
        <h1 className="text-3xl font-semibold text-gray-900">新闻动态</h1>

        {/* 图片新闻网格 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ENGINEERING_IMAGE_NEWS.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group border border-gray-900 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                比较重要的新闻<br />图片 + 标题
              </div>
              <div className="p-3">
                <div className="text-sm text-gray-500">{item.date}</div>
                <div className="text-base text-gray-800 mt-1">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 检索框 */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="检索框"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {/* 文字新闻列表 */}
        <div className="space-y-4">
          {ENGINEERING_TEXT_NEWS.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block border border-gray-900 rounded-lg p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="text-lg font-semibold text-gray-900 mb-2">{item.title}</div>
            </Link>
          ))}
        </div>

        {/* 翻页组件 */}
        <div className="flex justify-center pt-8">
          <button className="px-6 py-2 border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
            翻页组件
          </button>
        </div>
      </div>
    </section>
  );
}
