import { connectionSrt } from "@/utility/db";
import { Product } from "@/utility/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}


// {
//   name: "Note 10",
//   price: "30,000",
//   company: "Samsung",
//   color: "green",
//   category: "Mobile",
// }