"use client";

import { useState } from "react";
import SpecsTab from "../micro_elements/SpecsTab";
import MusicianTab from "../micro_elements/MusicianTab";
import { useLanguage } from "@/app/providers/LanguageContext";
import specs from "../../../../translations/specs";

export interface Specs {
  __typename: string;
  bodyWood: string;
  neckWood: string;
  fingerboardWood: string;
  pickups: string;
  scaleLength: string;
  tuners: string;
  bridge: string;
}

export interface Musician {
  __typename: string;
  name: string;
  musicianImage: string;
  bands: string[];
}

export interface ModelObjProps {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  specs: Specs;
  musicians: Musician[];
  __typename: string;
}

interface ModelProps {
  modelData: ModelObjProps;
}

export default function TabSection({ modelData }: ModelProps) {
  const [toggleTab, setToggleTab] = useState(true);
  const { language } = useLanguage();
  const t = specs[language];

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <button
          disabled={!modelData.specs}
          aria-pressed={toggleTab}
          aria-disabled={!modelData.specs}
          onClick={() => setToggleTab(true)}
          className={`w-[50%] pb-2 pt-8 text-[24px] ${
            toggleTab ? "border-b-7 border-b-amber-500 text-amber-500" : ""
          }`}
        >
          {t.specs}
        </button>
        <button
          disabled={!modelData.musicians[0]}
          aria-pressed={!toggleTab}
          aria-disabled={!modelData.musicians[0]}
          onClick={() => setToggleTab(false)}
          className={`w-[50%] pb-2 pt-8 text-[24px] ${
            !toggleTab ? "border-b-7 border-b-amber-500 text-amber-500" : ""
          }`}
        >
          {t.whoPlays}
        </button>
      </div>

      {toggleTab && (
        <SpecsTab
          dataSpecs={modelData.specs}
          descModel={modelData.description}
        />
      )}
      {!toggleTab && <MusicianTab musiciansArr={modelData.musicians} />}
    </div>
  );
}
