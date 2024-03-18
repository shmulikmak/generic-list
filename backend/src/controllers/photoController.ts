import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchPhotos } from "../services/photoService";

export const getPhotos = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const photos = await fetchPhotos();
    reply.send(photos);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'An internal server error occurred' });
  }
};
