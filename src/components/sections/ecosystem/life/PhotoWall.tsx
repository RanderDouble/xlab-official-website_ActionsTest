export function PhotoWall() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">照片墙</h2>
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          <div className="col-span-2 row-span-3 bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            大图
          </div>
          <div className="col-span-2 row-span-1 bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            横图
          </div>
          <div className="col-span-1 row-span-1 bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            小图
          </div>
          <div className="col-span-1 row-span-1 bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            小图
          </div>
          <div className="col-span-2 row-span-1 bg-gray-200 border border-gray-900 rounded-lg flex items-center justify-center text-sm text-gray-600">
            横图
          </div>
        </div>
      </div>
    </section>
  );
}
