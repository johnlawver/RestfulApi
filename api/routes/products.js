const express = require('express');
const router = express.Router();

//get route
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling get Requests to /product'
  });
});

//post route
router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json({
    message: 'Handling post Requests to /product',
    createdProduct: product
  });
});

//get item by id route
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'you discovered the special ID',
      id
    });
  } else {
    res.status(200).json({
      message: 'You passed and ID'
    });
  }
});

//patch route
router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated Product!'
  });
});

//deleted route
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Product!'
  });
});

module.exports = router;
