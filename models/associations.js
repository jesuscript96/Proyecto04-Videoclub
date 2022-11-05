const User = require("./user");
const Film = require("./film");
const Article = require("./article");
const Order = require("./order");
const Role = require("./role");
const Serie = require("./serie");

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Order);
Order.belongsTo(User);

Article.hasMany(Order)
Order.belongsTo(Article);

Serie.hasOne(Article);
Article.belongsTo(Serie)

Film.hasOne(Article);
Article.belongsTo(Film)
console.log('associated');