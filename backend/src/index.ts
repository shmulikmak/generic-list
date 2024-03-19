import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

import dataRoute from './routes/dataRoute';

dotenv.config();
const fastify = Fastify({ logger: true });

fastify.register(cors);
fastify.register(dataRoute);

const start = async () => {
  const port = parseInt(process.env.PORT || '3001');
  
  try {
    await fastify.listen({ port });
    fastify.log.info(`Server is running on ${fastify.server.address()}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();