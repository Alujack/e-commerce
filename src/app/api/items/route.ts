import { NextResponse } from 'next/server';

// Define the type for the items
type Item = {
  id: number;
  name: string;
};

// Sample data
const items: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// GET request handler
export async function GET() {
  return NextResponse.json(items);
}
