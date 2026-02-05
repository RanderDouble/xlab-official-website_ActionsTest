import type { ReactNode } from "react";

export function BrowserWindowCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-slate-300 rounded-lg overflow-hidden bg-white ${className ?? ""}`}>
      <div className="h-[30px] bg-slate-200 flex items-center gap-2 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
