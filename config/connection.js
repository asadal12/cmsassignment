const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('sql6457160', 'sql6457160', 'yfVGt9fh9t', {
        host: 'sql6.freesqldatabase.com',
        dialect: 'mysql',
        port: 3306
    });
}
module.exports = sequelize;
