import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method, body } = req;
  const id = query.id as string;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    switch (method) {
      case 'GET':
        const getResponse = await axios.get(`http://127.0.0.1:8000/api/auth/update/${id}/`);
        console.log(id)
        return res.status(200).json(getResponse.data);

      case 'PUT':
        const putResponse = await axios.put(`http://127.0.0.1:8000/api/auth/update/${id}/`, body);
        return res.status(200).json(putResponse.data);

      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
