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
    <div className="w-full flex justify-center px-6 my-10 relative">
      <div
        className={`relative overflow-hidden`}
        style={{
          width: "1320px",
          height: "567px",
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