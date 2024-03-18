import { FastifyRequest, FastifyReply } from "fastify";
import { fetchUsers } from "../services/userService";

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const usersWithExtras = await fetchUsers();
    
    reply.send(usersWithExtras);
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'An internal server error occurred' });
  }
};
