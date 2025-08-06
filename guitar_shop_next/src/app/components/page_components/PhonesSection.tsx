"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";
import Image from "next/image";

export default function PhonesSection() {
  const { language } = useLanguage();
  const t = home[language];

  return (
    <section className="w-full flex justify-center items-center gap-20 md:gap-32 py-16 md:py-24 px-6 md:px-8 flex-col-reverse md:flex-row">
      {/* Phones Image (on top for mobile) */}
      <div className="flex justify-center items-center">
        <Image
          src="/twoPhones.png"
          alt="App Preview on Phones"
          width={550}
          height={700}
          className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[550px] h-auto"
        />
      </div>

      {/* Text + Stores */}
      <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left max-w-[500px]">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] text-[#000000] leading-tight">
          {t.appTitle}
        </h2>
        <Image
          src="/Stores.png"
          alt="Available Stores"
          width={500}
          height={300}
          className="mt-6 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto"
        />
      </div>
    </section>
  );
}
