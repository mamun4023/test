const actorModel = require("../models/actor");

const directorValidator = require("../validations/director");

const addDirector = async (req, res, next) => {
   const { isValid, errors } = directorValidator(req.body);
   if (!isValid) {
      return res.status(404).json({
         message: "validation error",
         errors: errors,
      });
   }

   try {
      const { name, age, category } = req.body;
      const newDirector = new actorModel({
         name,
         age,
         category,
      });

      const result = await newDirector.save();
      if (result) {
         return res.status(200).json({
            message: "Director has been Added",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

const directorList = async (req, res, next) => {
   try {
      const result = await actorModel.find({});
      if (result) {
         return res.status(200).json({
            message: "Director List",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

module.exports = {
   addDirector,
   directorList,
};
