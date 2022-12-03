// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const pages = [
    {
      page: {
        name: "LandingPage",
        layout: "container",
        components: [{ type: "" }, { type: "" }, { type: "" }],
      },
      exact: true,
      path: "/",
    },
    {
      page: {
        name: "Dashboard",
        layout: "container",
        components: [{ type: "" }, { type: "" }, { type: "" }],
      },
      exact: true,
      path: "/",
    },
  ];
  res.status(200).json(pages);
}
