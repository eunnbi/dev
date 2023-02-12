import { getSortedPostsData } from "@lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const { category, size, page } = req.query;
      const data = getSortedPostsData({
        category: category as string | undefined,
        size: Number(size),
        page: Number(page)
      });
      return res.status(200).json(data);
    default:
      return;
  }
}
