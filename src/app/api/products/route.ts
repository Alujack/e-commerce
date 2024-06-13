
import { NextResponse } from 'next/server';
import product from "@/components/constant"


// Define the API route handler
export async function GET() {
  return NextResponse.json(product);
}
