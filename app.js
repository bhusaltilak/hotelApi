const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdocs = require("swagger-jsdoc");
const swaggerData = require('./docs/swagger');

const postsRoute = require('./Router/hotel');
const userRoute = require('./Router/userRoutes');

const port = 4000;



app.use(bodyParser.json());

app.use('/post',postsRoute);
app.use('/user',userRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdocs(swaggerData)));

app.listen(port,(req,res)=>{
       console.log(`listening on the port ${port}`);
})