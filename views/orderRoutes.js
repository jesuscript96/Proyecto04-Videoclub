const express = require("express");
const router = express.Router();

const OrderController = require('../controllers/OrderControllers')

// CRUD READ all Order - solo el admin
router.get('/' , OrderController.getAllOrders)

// CRUD READ Orders de un user
router.get('/user/:id' , OrderController.getOrdersFromUser)

// CRUD CREATE Order
router.post('/neworder' , OrderController.postNewOrder)

// CRUD Update Order
router.update('/update/:id' , OrderController.updateOrderById)