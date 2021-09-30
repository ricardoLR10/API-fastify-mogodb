const fastify = require("fastify")({
    logger: true
});

const productsRoutes = require('./routes/products.routes');
const swagger = require("./utils/swagger");

require('./utils/database');

fastify.register(require('fastify-swagger'), swagger.options);

fastify.get("/", (request, reply) => {
    reply.send({hello: "world"});
 });

// fastify.route(productsRoutes); // Para una unica ruta

productsRoutes.forEach(route => fastify.route(route));
 
const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address()}`);
}

start();