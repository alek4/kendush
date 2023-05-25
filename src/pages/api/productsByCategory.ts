// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/utils/ProductType";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "public/data/data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { category } = req.query;
    

    if (!category || typeof category !== 'string') {
      return res.status(400).json({ error: 'Invalid category parameter' });
    }

    const products = data.filter((p: Product) => p.category === category);

    if (!products) {
      return res.status(404).json({ error: 'Products not found' });
    }

    return res.status(200).json(products);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
