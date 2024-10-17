import type { NextApiRequest, NextApiResponse } from "next";
import { addCourse, getCourses } from "./courses";


export default async function handler(req: NextApiRequest, res: NextApiResponse<unknown>,) {
  switch (req.method) {
    case 'GET':
      getCourses(req,res);
      break;
    case 'POST':
      console.log(req.body);
      addCourse(req.body,res)
      break;
  }

}