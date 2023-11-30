// import { connectionSrt } from "@/utility/db";
// import { Product } from "@/utility/model/product";
import { connectionSrt } from "@/utility/db";
import { Product } from "@/utility/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionSrt);
  const data = await Product.find();

  // await mongoose.connect(connectionSrt)

  //   await mongoose.connect(connectionSrt)
  //   const data = await Product.find();
  //   console.log("🚀 ~ file: route.js:9 ~ GET ~ data:", data)

  return NextResponse.json({ result: true });
}
