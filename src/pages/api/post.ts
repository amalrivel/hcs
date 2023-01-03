import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/feed
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const resultUsers = await prisma.post.findMany({});

  res.json(resultUsers);
}
