
import DB from "@database";
import { NextApiRequest, NextApiResponse } from "node_modules/next/dist/shared/lib/utils";


const getAvocato = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const id = request.query.id as string;
  const db = new DB();
  const all = await db.getById(id);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({data: all}));
};

export default getAvocato;
