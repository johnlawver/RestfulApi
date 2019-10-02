//https://www.academind.com/learn/node-js/building-a-restful-api-with/mongodb-and-mongoose/
//video 6

///this section defines packages we are using in the app
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Defines the root node of each type of api request
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

///////////////////////
///////middleware/////
//////////////////////

//morgan shows status and response times of requests in console
app.use(morgan('dev'));

//body parser parses urlencoded data// probably depreciated, learn how to use nodes built in methods later
app.use(bodyParser.urlencoded({ extended: false }));
// same but for json
app.use(bodyParser.json());

//cross origin resonse error handling

//appends header to response to avoide cors errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  //if the request is an options call asking what methods are allowd, return the allowed methods
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Alllow-Methods',
      'PUT, POST, PATCH, DELETE, GET'
    );
    return res.status(200).json({});
  }
  next();
});

//directs products requests to product api route
app.use('/products', productRoutes);
//directs orders requests to order api route
app.use('/orders', orderRoutes);

//catches any requests that arent handled by an existing api and throws a 404 error
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
