"use client";

import Image from "next/image";

interface ImageWithVideoProps {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  videoSrc?: string;
  videoFallback?: string;
  sizes: string;
  loading?: "eager" | "lazy";
  quality?: number;
}

export default function ImageWithVideo({
  id,
  src,
  alt,
  width,
  height,
  videoSrc,
  videoFallback,
  sizes,
  loading,
  quality = 90,
}: ImageWithVideoProps) {
  return (
    <div className="relative group">
      <Image
        id={id}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        quality={quality}
        className="w-full h-auto object-cover"
      />

      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          muted
          loop
          playsInline
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        >
          <source src={videoSrc} type="video/webm" />
          {videoFallback && <source src={videoFallback} type="video/mp4" />}
        </video>
      )}
    </div>
  );
}
