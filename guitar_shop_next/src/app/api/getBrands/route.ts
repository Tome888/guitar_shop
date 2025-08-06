import brandsData from "@/app/data/brands";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(brandsData);
}
