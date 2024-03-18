import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { getUsers } from '../controllers/userController';

const usersRoute: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.get('/users', getUsers);
};

export default usersRoute;