import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  console.error(error);
  reply.status(error.statusCode || 500).send('An internal server error occurred' );
};
