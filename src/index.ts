import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.post("/", async (request, reply) => {
  reply.send(request.body);
});

fastify.listen({ port: 3000 }, function (err, address) {
  console.log("🚀 Fastify server running at: http://http://127.0.0.1:3000 🚀");
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
