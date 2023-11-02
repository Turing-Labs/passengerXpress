const path = require('path');
const db = require('../../config/db');

const userController = require('./user')(db);


module.exports = { userController };
