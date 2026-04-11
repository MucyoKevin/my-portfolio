"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
};

const PRIMARY = "/profile3.JPG";
const FALLBACK = "/profile.jpeg";

export function ProfileImage({ className, width, height, priority }: Props) {
  const [src, setSrc] = useState(PRIMARY);

  return (
    <Image
      src={src}
      alt="Mucyo Kevin"
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setSrc(FALLBACK)}
    />
  );
}
