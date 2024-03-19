import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchDataByType } from '../services/dataService';
import { QueryParams } from '../types/queryTypes';

export const getData = async (request: FastifyRequest<{ Querystring: QueryParams }>, reply: FastifyReply) => {
  try {
    const type = request.query.type;
    const data = await fetchDataByType(type);

    reply.send(data);
  } catch (error) {
    console.error(error);
    
    reply.status(500).send({ error: 'An internal server error occurred' });
  }
};
