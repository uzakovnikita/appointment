import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  return NextResponse.json([new Date(), new Date()]);
}

export async function POST(request: Request) {
  return NextResponse.json({ status: "ok" });
}
