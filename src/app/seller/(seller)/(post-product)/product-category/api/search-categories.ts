// pages/api/search-categories.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;

  try {
    const response = await fetch(`http://localhost:8000/api/store/search/category?q=${q}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
}
