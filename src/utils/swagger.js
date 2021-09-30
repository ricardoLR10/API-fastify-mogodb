module.exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: "Node.js Fastify Mongodb API",
            description: "Building a blazing fast REST API whith Node.js, fastify and MongoD",
            version: '0.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: "Find more info here",
        }
    },
    host: 'localhost:3000',
    schema: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
}