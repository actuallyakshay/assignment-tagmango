import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt, size = 32, className = "" }: AvatarProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-[var(--bg-subtle)] ${className}`}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" unoptimized />
    </div>
  );
}
