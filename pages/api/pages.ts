// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

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
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  await runMiddleware(req, res, cors)
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
      path: "/dashboard",
    },
    {
      page: {
        name: "404",
        layout: "grid",
        components: [{ type: "" }],
      },
      exact: false,
      path: "*",
    },
  ];
  res.status(200).json(pages);
}
