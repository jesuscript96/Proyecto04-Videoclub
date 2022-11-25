const express = require("express");
const router = express.Router();

const UserRoutes = require("../views/userRoutes");
const RoleRoutes = require("../views/roleRoutes");
const OrderRoutes = require("../views/orderRoutes");
const FilmRoutes = require("../views/filmRoutes");
const authRoutes = require("../views/authRoutes")


router.use("/users", UserRoutes);
router.use("/roles", RoleRoutes);
router.use("/orders", OrderRoutes);
router.use("/films", FilmRoutes);

router.use("/auth",authRoutes);

module.exports = router

