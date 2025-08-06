import guitarsData from "@/app/data/guitarsData";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ brandId: string }> }
) {
  const resolvedParams = await params;
  const brandId = resolvedParams.brandId;

  const filteredGuitars = guitarsData.filter(
    (guitar) => guitar.brandId === brandId
  );

  return NextResponse.json(filteredGuitars);
}
