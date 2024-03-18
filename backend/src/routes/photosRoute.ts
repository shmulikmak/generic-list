import { FastifyInstance } from "fastify";
import { getPhotos } from '../controllers/photoController';

export default async (fastify: FastifyInstance) => {
  fastify.get("/photos", getPhotos);
};