import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
    console.log("id",req.query.id);
  switch(req.method){
    case 'GET':
      res.status(200).json([{ name: "John Doe" }]);
      break;
    case 'PUT':
      res.status(201).json([{ name: "John Doe" }]);
        break;
    case 'PATCH':
      res.status(200).json([{ name: "John Doe" }]);
      break;
    case 'DELETE':
        break;
  }

}