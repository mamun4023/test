const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateActor = (data) => {
   let errors = {};

   data.name = !isEmpty(data.name) ? data.name : "";
   data.age = !isEmpty(data.age) ? data.age : "";
   data.category = !isEmpty(data.category) ? data.category : "";

   if (validator.isEmpty(data.name)) {
      errors.name = "Name is Required";
   }

   if (validator.isEmpty(data.age)) {
      errors.age = "Age is required";
   }

   if (validator.isEmpty(data.category)) {
      errors.category = "Category is required";
   }

   return {
      errors,
      isValid: isEmpty(errors),
   };
};

module.exports = validateActor;
