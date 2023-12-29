import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Documentation',
            version: '1.0.0',
            description: 'API documentation for your Library Management System'
        },
    },
    apis: ['index.js'], // Replace with the actual filename of your app
};

const specs = swaggerJsdoc(options);

module.exports = specs;
