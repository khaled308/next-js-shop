import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}
