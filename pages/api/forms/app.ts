import { PrismaClient } from "../../../node_modules/.prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const data = req.body;
  const app = await prisma.app.create({
    data,
  });
  res.status(200).json(app);
}
