import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  className?: string;
  alt?: string;
}

export function Banner({
  imageSrc,
  className = "",
  alt = "banner",
}: BannerProps) {
  return (
    <div className="w-full bg-white">
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1320 / 567",
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority // 让图片优先加载
        />
      </div>
    </div>
  );
}