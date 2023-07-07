const userModel = require("../models/user");

const signUp = (req, res, next) => {
   res.send("signup");
};

const signIn = (req, res, next) => {
   res.send("sign in");
};

module.exports = {
   signUp,
   signIn,
};
