import Fastify, { RequestGenericInterface } from "fastify";
import cors from "@fastify/cors";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

type ParamID = {
  Params: {
    id: number;
  };
};

type CreateUser = RequestGenericInterface & { Body: Prisma.UserCreateInput };
type UpdateUser = CreateUser & ParamID;
type WithIdParams = RequestGenericInterface & ParamID;

require("dotenv").config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const fastify = Fastify();

fastify.register(cors, {
  // put your options here
});

fastify.get("/user", (req, reply) => {
  return prisma.user.findMany();
});

fastify.get<WithIdParams>("/user/:id", (req, reply) => {
  const { id } = req.params;
  const newId = typeof id === "string" ? parseInt(id) : id;
  return prisma.user.findUnique({
    where: {
      id: newId,
    },
  });
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
  const newId = typeof id === "string" ? parseInt(id) : id;
  return prisma.user.update({
    where: {
      id: newId,
    },
    data: data,
  });
});

fastify.delete<WithIdParams>("/user/:id", (req, reply) => {
  const { id } = req.params;
  const newId = typeof id === "string" ? parseInt(id) : id;
  return prisma.user.delete({
    where: {
      id: newId,
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
