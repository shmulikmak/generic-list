import { FastifyInstance, FastifyPluginAsync } from "fastify";

import { getData, searchData, getDataById } from "../controllers/dataController";
import { DataType } from "../types/dataTypes";

const dataRoute: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get<{ Params: { type: DataType } }>(
    "/data/:type",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            type: { type: "string", enum: ["users", "photos"] },
          },
          required: ["type"],
        },
      },
    },
    getData
  );

  fastify.get<{ Params: { type: DataType }; Querystring: { q: string } }>(
    "/data/:type/search",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            type: { type: "string", enum: ["users", "photos"] },
          },
          required: ["type"],
        },
        querystring: {
          type: "object",
          properties: {
            q: { type: "string" },
          },
          required: ["q"],
        },
      },
    },
    searchData
  );

  fastify.get<{ Params: { type: DataType; id: string } }>(
    "/data/:type/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            type: { type: "string", enum: ["users", "photos"] },
            id: { type: "string" },
          },
          required: ["type", "id"],
        },
      },
    },
    getDataById
  );
};

export default dataRoute;