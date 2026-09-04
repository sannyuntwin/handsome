"use client";

import Image from "next/image";

const cubeImages = [
  { src: "/img/IMG_2432.JPG", alt: "Saw San Nyunt Win portrait" },
  { src: "/img/embedded.jpg", alt: "Saw San Nyunt Win transparent portrait" },
  { src: "/img/data-scientist.jpg", alt: "Illustrated portrait of Saw San Nyunt Win" },
  { src: "/img/software.jpg", alt: "Saw San Nyunt Win portrait" },
];

export default function PortraitCube() {
  return (
    <div className="portrait-cube-scene" aria-label="Rotating portrait gallery">
      <div className="portrait-cube">
        {cubeImages.map((image, index) => (
          <div key={`${image.src}-${index}`} className={`portrait-cube-face portrait-cube-face-${index}`}>
            <Image src={image.src} alt={image.alt} fill sizes="320px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}