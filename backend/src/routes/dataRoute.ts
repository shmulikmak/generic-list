import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { getData } from '../controllers/dataController'; 

const dataRoute: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/data', getData);
};

export default dataRoute;
