require('dotenv').config();

module.exports = {
    dialect: 'postgresql',
    url: process.env.DATABASE_URL
}