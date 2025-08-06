"use client";

import ModelImage from "../micro_elements/ModelImage";

interface HeroProps {
  imgUrl: string;
  nameModle: string;
}

export default function GuitarSpecsHero({ imgUrl, nameModle }: HeroProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full hero gap-6 px-4 md:px-0">
      {/* On mobile: image on top, text below */}
      <div className="logoGradiant flex items-center justify-center w-full md:w-2/3 h-[300px] md:h-[400px] relative order-1 md:order-2">
        <ModelImage customClass="specsHeroImage" src={imgUrl} alt={nameModle} />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4 text-center md:text-left order-2 md:order-1">
        <h2 className="text-[32px] md:text-[40px] font-bold text-zinc-950">
          {nameModle}
        </h2>
      </div>
    </section>
  );
}
