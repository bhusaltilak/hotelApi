const swaggerData = {
    swaggerDefinition: {
      openapi: '3.0.1',
      info: {
        version: '1.0.0',
        title: 'Hotel management System API',
        description: 'It keeps track all of Library Records',
        servers: ['http://localhost:4000'],
      },
      components: {
        securitySchemes: {
          jwt: {
            type: 'http' || 'https',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['Router/*.js'],
  };
  
  module.exports= swaggerData;
  