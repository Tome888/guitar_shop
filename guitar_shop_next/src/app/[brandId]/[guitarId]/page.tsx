"use client";

import { useParams } from "next/navigation";

import TabSection, {
  ModelObjProps,
} from "@/app/components/page_components/TabSection";
import GuitarSpecsHero from "@/app/components/page_components/GuitarSpecsHero";
import Loading from "@/app/components/suspense/Loading";
import { useLanguage } from "@/app/providers/LanguageContext";

import specs from "../../../../translations/specs";
import ErrComponent from "@/app/components/suspense/ErrComponent";
import ItemNotFound from "@/app/components/suspense/ItemNotFound";
import { useEffect, useState } from "react";

export default function GuitarPage() {
  const [data, setData] = useState<ModelObjProps[] | []>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const params = useParams();
  const brandId = params?.brandId as string;
  const modelId = params?.guitarId as string;
  const { language } = useLanguage();
  const t = specs[language];

  useEffect(() => {
    fetch(`/api/getModel/${brandId}/${modelId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data[0]) return;
        setData(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [brandId, modelId]);

  if (loading) return <Loading msg={t.loadingMsg} />;

  if (error) return <ErrComponent errMsg={error} />;

  if (!data)
    return <ItemNotFound msgOne={t.modelNotFound} msgTwo={t.badParams} />;
  const model = data[0];

  return (
    <main>
      <GuitarSpecsHero imgUrl={model.image} nameModle={model.name} />

      {data[0] ? (
        <TabSection modelData={data[0]} />
      ) : (
        <p className="spinner"></p>
      )}
    </main>
  );
}
