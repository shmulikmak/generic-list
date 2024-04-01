import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchDataByType } from '../services/dataService';
import { QueryParams } from '../types/queryTypes';

export const getData = async (request: FastifyRequest<{ Querystring: QueryParams & { search?: string, id?: string } }>, reply: FastifyReply) => {
  // const type = request.query.type;
  const { type, search = '', id = ''  } = request.query;
  const { data, schema } = await fetchDataByType(type, search, id);

  if (!data) {
    throw new Error('Data not found');
  }

  reply.send({ data, schema });
};