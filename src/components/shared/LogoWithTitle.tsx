import Image from "next/image";

interface LogoWithTitleProps {
  chineseText: string;
  englishText: string;
  className?: string;
}

export function LogoWithTitle({ chineseText, englishText, className }: LogoWithTitleProps) {
  return (
    <div className={`flex items-start gap-4 mb-12 ${className ?? ""}`}>
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="XLab Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>

      {/* 文本内容 */}
      <div className="flex flex-col justify-between h-12">
        <h2 className="text-[28px] font-bold text-black leading-none">
          {chineseText}
        </h2>
        <p className="text-[16px] font-bold text-black leading-none">
          {englishText}
        </p>
      </div>
    </div>
  );
}
