const express = require("express");
const router = express.Router();

const UserRoutes = require("./views/userRoutes");
const SerieRoutes = require("./views/serieRoutes");
const RoleRoutes = require("./views/roleRoutes");
const OrderRoutes = require("./views/orderRoutes");
const FilmRoutes = require("./views/filmRoutes");
const ArticleRoutes = require("./views/articleRoutes");


router.use("/users", UserRoutes);
router.use("/series", SerieRoutes);
router.use("/roles", RoleRoutes);
router.use("/orders", OrderRoutes);
router.use("/films", FilmRoutes);
router.use("/articles", ArticleRoutes);


module.exports = router

