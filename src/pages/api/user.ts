import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const resultUsers = await prisma.user.findMany({});
    res.json(resultUsers);
  } else if (req.method === "POST") {
    const result = await prisma.user.create({
      data: {
        ...req.body,
      },
    });
    res.json(result);
  }
}
