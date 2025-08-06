import { useLanguage } from "@/app/providers/LanguageContext";
import home from "../../../../translations/home";
import { Shapes, Truck, Wallet } from "lucide-react";

export default function BlackHeroSec() {
  const { language } = useLanguage();
  const t = home[language];

  return (
    <section className="w-full bg-[#121212] flex flex-col justify-center items-center gap-20 pt-20 pb-20 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-[44px] text-amber-50 text-center">
        {t.blackSecTitle}
      </h2>

      <div className="w-full flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center md:justify-evenly items-center gap-12 md:gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center text-center max-w-[300px]">
          <div className="bg-[#262626] mb-6 p-3 rounded-lg flex items-center justify-center">
            <Shapes color="#FFFFFF" />
          </div>
          <h4 className="text-white tracking-[0.08em] font-bold text-lg uppercase">
            {t.badges[0].title}
          </h4>
          <p className="text-[#666666] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia!
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center text-center max-w-[300px]">
          <div className="bg-[#262626] mb-6 p-3 rounded-lg flex items-center justify-center">
            <Truck color="#FFFFFF" />
          </div>
          <h4 className="text-white tracking-[0.08em] font-bold text-lg uppercase">
            {t.badges[1].title}
          </h4>
          <p className="text-[#666666] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia!
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center text-center max-w-[300px]">
          <div className="bg-[#262626] mb-6 p-3 rounded-lg flex items-center justify-center">
            <Wallet color="#FFFFFF" />
          </div>
          <h4 className="text-white tracking-[0.08em] font-bold text-lg uppercase">
            {t.badges[2].title}
          </h4>
          <p className="text-[#666666] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            officia!
          </p>
        </div>
      </div>
    </section>
  );
}
