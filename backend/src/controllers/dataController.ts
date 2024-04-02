import { FastifyRequest, FastifyReply } from 'fastify';
import { fetchDataByType } from '../services/dataService';
import { DataType } from '../types/dataTypes';

export const getData = async (
  request: FastifyRequest<{ Params: { type: DataType } }>,
  reply: FastifyReply
) => {
  const { type } = request.params;
  const { data, schema } = await fetchDataByType(type);
  
  reply.send({ data, schema });
};

export const searchData = async (
  request: FastifyRequest<{ Params: { type: DataType }; Querystring: { q: string } }>,
  reply: FastifyReply
) => {
  const { type } = request.params;
  const { q: searchTerm } = request.query;
  const { data, schema } = await fetchDataByType(type, searchTerm);
  
  reply.send({ data, schema });
};

export const getDataById = async (
  request: FastifyRequest<{ Params: { type: DataType; id: string } }>,
  reply: FastifyReply
) => {
  const { type, id } = request.params;
  const { data, schema } = await fetchDataByType(type, '', id);
  
  reply.send({ data, schema });
};