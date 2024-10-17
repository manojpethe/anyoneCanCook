import type { NextApiRequest, NextApiResponse } from "next";
import { getCourseById, updateCourse } from "./courses";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  console.log("id", req.query.id);
  switch (req.method) {
    case 'GET':
      getCourseById(req.query.id || 0, res);
      break;
    case 'PUT':
      updateCourse(req.body, res)
      break;
    case 'DELETE':
      break;
  }

}