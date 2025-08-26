const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // OpenAPI version
    info: {
      title: "My Express API",
      version: "1.0.0",
      description: "API documentation for my Express project",
    },
    servers: [
      {
        url: "http://localhost:4000", // your backend URL
      },
    ],
  },
  apis: ["./docs/*.js","./routes/*.js"], // path to files with Swagger comments
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  app.use("/digital-menu-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

