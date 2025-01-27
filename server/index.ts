import Fastify from "fastify";
import cors from "@fastify/cors";
require("dotenv").config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  // put your options here
});

fastify.get("/", (req, reply) => {
  return process.env.DB_CONNECTION;
});

fastify.listen({ host: "0.0.0.0", port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
