const User = require("./user");
const Film = require("./film");
const Order = require("./order");
const Role = require("./role");

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Order);
Order.belongsTo(User);

Film.hasMany(Order)
Order.belongsTo(Film);

console.log('associated');