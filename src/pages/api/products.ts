// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/utils/ProductType";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "public/data/data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
