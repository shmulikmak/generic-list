import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { getData } from "../controllers/dataController";
import { QueryParams } from "../types/queryTypes";

const dataRoute: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get<{ Querystring: QueryParams }>(
    "/data",
    {
      schema: {
        querystring: {
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
};

export default dataRoute;
