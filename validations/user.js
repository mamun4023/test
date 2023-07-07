const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateUser = (data) => {
   let errors = {};

   data.name = !isEmpty(data.name) ? data.name : "";
   data.email = !isEmpty(data.email) ? data.email : "";
   data.role = !isEmpty(data.role) ? data.role : "";
   data.password = !isEmpty(data.password) ? data.password : "";

   if (validator.isEmpty(data.name)) {
      errors.name = "Name is required";
   }

   if (validator.isEmpty(data.email)) {
      errors.email = "Email is Required";
   }

   if (!validator.isEmail(data.email)) {
      errors.email = "Enter valid email";
   }
   if (validator.isEmpty(data.role)) {
      errors.name = "Name is required";
   }

   if (validator.isEmpty(data.password)) {
      errors.password = "Password is required";
   }

   return {
      errors,
      isValid: isEmpty(errors),
   };
};

module.exports = validateUser;
