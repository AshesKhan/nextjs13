'use client'
import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
