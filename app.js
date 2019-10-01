//https://www.academind.com/learn/node-js/building-a-restful-api-with/handling-errors-improving-the-project-setup/
//video 4

const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
