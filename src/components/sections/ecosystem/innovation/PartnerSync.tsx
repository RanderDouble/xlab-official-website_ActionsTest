import Image from "next/image";
import { LogoWithTitle } from "@/components/shared/LogoWithTitle";

export function PartnerSync() {
  return (
    <section className="w-full relative py-16 bg-white overflow-hidden">
      {/* 标题部分：中文“合作机构”，英文“Partner Organization” */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <LogoWithTitle 
          chineseText="合作机构" 
          englishText="Partner Organization" 
        />
      </div>

      {/* 合作机构大图 */}
      <div className="relative w-full flex justify-center">
        <div
          className="relative"
          style={{
            width: "1100px",
            height: "770px",
          }}
        >
          <Image
            src="/innovation/partner.svg"
            alt="合作机构 Partner Organization"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}