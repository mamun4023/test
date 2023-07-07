const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const userModel = require("../models/user");

const userSignUpValidator = require("../validations/userSignup");
const userSigInValidator = require("../validations/userSignIn");

const signUp = async (req, res, next) => {
   const { errors, isValid } = userSignUpValidator(req.body);

   if (!isValid) {
      return res.status(404).json({
         message: "validation error",
         errors: errors,
      });
   }

   try {
      const { name, email, role, password } = req.body;
      const checkEmail = await userModel.findOne({ email });
      console.log(password);
      if (checkEmail) {
         return res.status(404).json({
            message: "Email already exist",
         });
      }

      const newUser = new userModel({
         name,
         email,
         role,
         password, // we need to hashed password to secure auth
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

const signIn = async (req, res, next) => {
   const { errors, isValid } = userSigInValidator(req.body);

   if (!isValid) {
      return res.status(404).json({
         message: "validation error",
         errors: errors,
      });
   }

   try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });
      if (!result) {
         return res.status(404).json({
            message: "Account does not found ! please signup",
         });
      }

      if (result.password != password) {
         return res.status(404).json({
            message: "Password is not correct",
         });
      }

      const token = jwt.sign(
         { _id: result._id, email: result.email, role: result.role },
         process.env.JWT_SIGNIN_SECRET
      );

      // we need to add more option to secure cookie
      res.cookie("token", token);

      return res.status(200).json({
         message: "Login successful",
         token: token,
      });
   } catch (err) {
      next(err);
   }
};

module.exports = {
   signUp,
   signIn,
};
