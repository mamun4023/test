const jwt = require("jsonwebtoken");

const isUser = (req, res, next) => {
   const token = req.cookies.token;

   try {
      verified = jwt.verify(token, process.env.JWT_SIGNIN_SECRET);
      if (!verified) {
         return res.status(404).json({
            message: "Invalid Token",
         });
      }
      req.user = verified;
      next();
   } catch (err) {
      return res.status(400).json({
         message: "Authectication has Faied",
      });
   }
};

const isAdmin = (req, res, next) => {
   const token = req.cookies.token;

   try {
      verified = jwt.verify(token, process.env.JWT_SIGNIN_SECRET);
      if (!verified) {
         return res.status(404).json({
            message: "Invalid Token",
         });
      }

      if (verified.role != "admin") {
         return res.status(404).json({
            message: "Only admin can do this operation",
         });
      }

      req.user = verified;
      next();
   } catch (err) {
      return res.status(400).json({
         message: "Authectication has failed",
      });
   }
};

module.exports = {
   isUser,
   isAdmin,
};
