import "reflect-metadata";

import { PrismaClient } from "../../node_modules/.prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
import { trycatch } from "../../util/trycatch";
const prisma = new PrismaClient();

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  await runMiddleware(req, res, cors);
  const [apps = [], error] = await trycatch(prisma.app.findMany());
  if (apps) res.status(200).json(apps);
  else res.status(400).json(error);
}
