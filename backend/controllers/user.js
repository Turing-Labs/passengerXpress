const path = require('path');

const loginUser = async (req, res) => {


    res.sendFile(path.resolve("frontend/user/login.html"));

};

const handleLoginUser = async (req, res) => {
    res.sendFile(path.resolve("frontend/user/login.html"));

};

module.exports = { loginUser }

// module.exports = function (db) {
//     return loginUser;
// }