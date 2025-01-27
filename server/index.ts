import Fastify, { RequestGenericInterface } from "fastify";
import cors from "@fastify/cors";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

type CreateUser = RequestGenericInterface & { Body: Prisma.UserCreateInput };
type UpdateUser = CreateUser & {
  Params: {
    id: number;
  };
};

type DeleteUser = RequestGenericInterface & {
  Params: {
    id: number;
  };
};

require("dotenv").config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  // put your options here
});

fastify.get("/user", (req, reply) => {
  return prisma.user.findMany();
});

fastify.post<CreateUser>("/user", (req, reply) => {
  const { ...data } = req.body;
  return prisma.user.create({
    data: data,
  });
});

fastify.put<UpdateUser>("/user/:id", (req, reply) => {
  const { ...data } = req.body;
  const { id } = req.params;
  return prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
});

fastify.delete<DeleteUser>("/user/:id", (req, reply) => {
  const { id } = req.params;
  return prisma.user.delete({
    where: {
      id: id,
    },
  });
});

fastify.listen({ host: "0.0.0.0", port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
