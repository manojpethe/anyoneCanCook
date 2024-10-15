import type { NextApiRequest, NextApiResponse } from "next";
import { addCourse,getCourses } from "./courses";

type Data = {
  name: string;
};

type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgPath: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch(req.method){
    case 'GET':
      const result = getCourses();
      res.status(200).json(result);
      break;
    case 'POST':
      res.status(201).json({ id: 1, title: "Course1", description:"description", price:500, imgPath:"/img/course1.jpg"});
        break;
  }

}