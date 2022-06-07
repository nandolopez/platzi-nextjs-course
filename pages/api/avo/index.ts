import { IncomingMessage, ServerResponse } from "http";
import DB from "@database";

const AllAvocatos = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const db = new DB();
  const all = await db.getAll();
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({data: all}));
};

export default AllAvocatos;
