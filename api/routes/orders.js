const express = require('express');
const router = express.Router();

//get route
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were Fetched'
  });
});

//post route
router.post('/', (req, res, next) => {
  const order = {
    productID: req.body.productID,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: 'Order was created',
    order: order
  });
});

//get item by id route
router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'Order details',
    orderID: req.params.orderId
  });
});

//get item by id route
router.delete('/:orderId', (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'Order deleted',
    orderID: req.params.orderId
  });
});

module.exports = router;
