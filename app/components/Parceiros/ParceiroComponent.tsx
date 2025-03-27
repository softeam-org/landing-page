import Image, { StaticImageData } from "next/image";
import React from "react";
import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";

interface PartnerProps {
  src: string;
  index: number;
}

export const images: StaticImageData[] = [img1, img2, img3];

function Partner({ src, index }: PartnerProps): React.JSX.Element {
  return <Image src={src} alt={`Partner ${index + 1}`} />;
}

export default Partner;
