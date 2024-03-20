import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchDataByType } from '../services/dataService';
import { QueryParams } from '../types/queryTypes';

export const getData = async (request: FastifyRequest<{ Querystring: QueryParams }>, reply: FastifyReply) => {
  const type = request.query.type;
  const { data, schema } = await fetchDataByType(type);

  reply.send({ data, schema });
};
