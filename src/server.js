require('express-async-errors')

const AppError = require('./utils/appError')

const express = require('express');

const routes = require('./routes');
const { json } = require('express');

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.log(error)

    return response.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
})

const port = 3333;


app.listen(port, ()=> console.log(`Server is running on port: ${port}`))