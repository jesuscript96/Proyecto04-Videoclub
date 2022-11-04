const express = require("express");
const router = express.Router();

const OrderController = require('../controllers/OrderControllers')

// CRUD READ Orders de un user
router.get('/:mail' , OrderController.getOrdersFromUser)

// CRUD READ all Order - solo el admin
router.get('/' , OrderController.getAllOrders)

// CRUD CREATE Order
router.post('/neworder' , OrderController.postNewOrder)

// CRUD Update Order
router.put('/update/:id_order' , OrderController.updateOrderById)

module.exports = router