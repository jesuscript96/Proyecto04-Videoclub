const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware, isValidUser } = require("../middlewares/authMiddleware")

const OrderController = require('../controllers/OrderControllers')

// CRUD READ Orders de un user
// router.get('/:mail', authBearerMiddleware, isValidUser, OrderController.getOrdersFromUser)
router.get('/:mail', OrderController.getOrdersFromUser)

// CRUD READ Orders Activas de un user
// router.get('/active/:mail', authBearerMiddleware, isValidUser, OrderController.getOrdersFromUser)
router.get('/active/:mail', OrderController.getActiveOrdersFromUser)


// CRUD READ all Order - solo el admin
// router.get('/', authBearerMiddleware, isValidRoleAdmin, OrderController.getAllOrders)
router.get('/', OrderController.getAllOrders)

// CRUD READ all Order Activas - solo el admin
// router.get('/active', authBearerMiddleware, isValidRoleAdmin, OrderController.getAllOrders)
router.get('/active/orders/all', OrderController.getAllActiveOrders)

// CRUD CREATE Order
router.post('/neworder',authBearerMiddleware, OrderController.postNewOrder)

// CRUD Update Order
router.put('/update/:id_order',authBearerMiddleware, isValidRoleAdmin, OrderController.updateOrderById)

module.exports = router