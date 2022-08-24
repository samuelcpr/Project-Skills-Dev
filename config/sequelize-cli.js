require('dotenv').config();

module.exports = {
    dialect: 'postegres',
    url: process.env.DATABASE_URL
}