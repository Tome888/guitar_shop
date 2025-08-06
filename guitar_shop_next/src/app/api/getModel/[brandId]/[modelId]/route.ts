import modelSpecs from "@/app/data/modelSpecs";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ brandId: string; modelId: string }> }
) {
  const { brandId, modelId } = await params;

  const filteredModels = modelSpecs.filter(
    (model) => model.brandId === brandId && model.id === modelId
  );

  return NextResponse.json(filteredModels);
}
