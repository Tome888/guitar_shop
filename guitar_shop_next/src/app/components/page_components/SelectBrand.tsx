"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useBrandContext } from "@/app/providers/BrandContext";
import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";
import Loading from "../suspense/Loading";
import ErrComponent from "../suspense/ErrComponent";

export default function SelectBrand() {
  const router = useRouter();
  const { brands, loading, error } = useBrandContext();
  const { language } = useLanguage();
  const t = home[language];

  if (loading) return <Loading msg={"Loading..."} />;
  if (error) return <ErrComponent errMsg={error} />;

  return (
    <section className="w-full flex flex-col justify-center items-center gap-1 pt-14 pb-14 sm:pt-14 sm:pb-14 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-zinc-950 text-center">
        {t.brandSecTitle}
      </h2>
      <p className="text-base sm:text-lg text-[rgba(102,102,102,1)] text-center mb-6 max-w-[600px]">
        {t.smallBrandSecTitle}
      </p>

      <div className="flex flex-wrap items-center justify-center w-full gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => router.push(`/${brand.id}`)}
            className="relative w-[40%] sm:w-[30%] md:w-[18%] h-[80px] sm:h-[90px] md:h-[100px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              className="object-contain filter grayscale opacity-55"
              sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 150px"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
