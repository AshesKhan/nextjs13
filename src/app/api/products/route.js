import { connectionSrt } from "@/utility/db";
import { Product } from "@/utility/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data =[]
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
  } catch (error) {
    data = {success: false}
  }
  return NextResponse.json({ result: data, success: true });
}
