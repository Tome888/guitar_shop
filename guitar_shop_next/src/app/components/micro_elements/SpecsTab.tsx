import { Specs } from "../page_components/TabSection";

interface SpecsData {
  dataSpecs: Specs;
  descModel: string;
}

export default function SpecsTab({ dataSpecs, descModel }: SpecsData) {
  return (
    <div className="w-full gap-4 flex flex-col items-start justify-start pt-10 pb-10 px-6 md:pt-10 md:pb-40 md:px-24">
      <p className="text-bigger">{descModel}</p>

      <div className="text-bigger">
        <div>• Body Wood: {dataSpecs.bodyWood}</div>
        <div>• Neck Wood: {dataSpecs.neckWood}</div>
        <div>• Fingerboard: {dataSpecs.fingerboardWood}</div>
        <div>• Pickups: {dataSpecs.pickups}</div>
        <div>• Tuners: {dataSpecs.tuners}</div>
        <div>• Scale Length: {dataSpecs.scaleLength}</div>
        <div>• Bridge: {dataSpecs.bridge}</div>
      </div>
    </div>
  );
}
