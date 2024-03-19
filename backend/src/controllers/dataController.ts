import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchDataByType } from '../services/dataService';
import { QueryParams } from '../types/queryTypes';

export const getData = async (request: FastifyRequest<{ Querystring: QueryParams }>, reply: FastifyReply) => {
  const type = request.query.type;
  const data = await fetchDataByType(type);

  if (!data) {
    throw new Error('Data not found');
  }

  reply.send(data);
};
