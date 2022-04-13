import swaggerJsdoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Test Doc',
    version: '0.0.0',
    description: 'lorem ipsum'
  },
  servers: [{ url: 'http://localhost:3001' }],
  components: {
    schemas: {
      users: {
        type: 'object',
        required: ['email', 'picture', 'username', 'password'],
        properties: {
          username: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          picture: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      }
    }
  }
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/docs/endpoints/*.docs.ts']
};

export default swaggerJsdoc(swaggerOptions);
