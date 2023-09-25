// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/utils/ProductType";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../public/data/data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id, category } = req.query;


    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid id parameter' });
    }

    const product = data.find((p: any) => p.id === id && p.category === category);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json(product);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
