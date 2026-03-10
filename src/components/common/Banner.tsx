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
    <div className="w-full my-10">
      <Image
        src={imageSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-auto ${className}`}
        priority
      />
    </div>
  );
}