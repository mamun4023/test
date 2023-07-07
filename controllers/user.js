const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const userValidator = require("../validations/user");

const signUp = async (req, res, next) => {
   const { errors, isValid } = userValidator(req.body);

   if (!isValid) {
      return res.status(404).json({
         message: "validation error",
         errors: errors,
      });
   }

   try {
      const { name, email } = req.body;
      const checkEmail = await userModel.findOne({ email });

      if (checkEmail) {
         return res.status(404).json({
            message: "Email already exist",
         });
      }

      const newUser = new userModel({
         name,
         email,
      });

      const result = await newUser.save();
      if (result) {
         return res.status(200).json({
            message: "User has been created",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

const signIn = (req, res, next) => {
   res.send("sign in");
};

module.exports = {
   signUp,
   signIn,
};
