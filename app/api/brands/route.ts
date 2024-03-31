import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const brands = await prisma.brand.findMany();
  return NextResponse.json(brands);
}
