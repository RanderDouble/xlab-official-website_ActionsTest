export function Footer() {
  return (
    <footer className="w-full bg-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-end gap-8">
          <div className="flex flex-col gap-6 items-center md:items-end">
            <div className="flex items-center gap-4">
              <div className="w-28 h-16 bg-purple-100 text-purple-700 flex items-center justify-center text-xs">
                Logo
              </div>
              <div className="w-20 h-20 bg-white border flex items-center justify-center text-xs text-gray-500">
                二维码
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="bg-white/60 px-4 py-2 rounded text-sm text-gray-600">
                Slogan 文案占位
              </div>
              <button className="bg-white px-4 py-2 rounded text-sm text-gray-700">
                contact@xlab.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
