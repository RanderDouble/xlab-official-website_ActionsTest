import { COOP_PARTNERS } from "@/lib/data";

export function LogoWall() {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden border rounded-lg">
        <div className="flex gap-4 py-4 px-4 animate-marquee">
          {COOP_PARTNERS.faculties.map((item) => (
            <div
              key={item}
              className="min-w-[140px] h-[70px] bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden border rounded-lg">
        <div className="flex gap-4 py-4 px-4 animate-marquee-reverse">
          {COOP_PARTNERS.enterprises.map((item) => (
            <div
              key={item}
              className="min-w-[140px] h-[70px] bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
