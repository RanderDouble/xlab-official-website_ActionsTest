export function HomeIntro({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-center">
      <div className="text-xl md:text-2xl font-semibold text-gray-800">{title}</div>
      <div className="flex items-center justify-between gap-4">
        <div className="bg-gray-100 h-20 rounded flex-1 flex items-center justify-center text-sm text-gray-600">
          {desc}
        </div>
        <div className="w-24 h-20 flex items-center justify-center">
          <img src="/assets/logo.svg" alt="" aria-hidden className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
