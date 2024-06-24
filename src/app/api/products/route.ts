
import { NextResponse } from 'next/server';
import product from "@/constants/product"


// Define the API route handler
export async function GET() {
  return NextResponse.json(product);
}
