const actorModel = require("../models/actor");

const actorValidator = require("../validations/actor");

const addActor = async (req, res, next) => {
   const { isValid, errors } = actorValidator(req.body);
   if (!isValid) {
      return res.status(404).json({
         message: "validation error",
         errors: errors,
      });
   }

   try {
      const { name, age, category } = req.body;
      const newActor = new actorModel({
         name,
         age,
         category,
      });

      const result = await newActor.save();
      if (result) {
         return res.status(200).json({
            message: "Actor has been Added",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

const actorList = async (req, res, next) => {
   try {
      const result = await actorModel.find({});
      if (result) {
         return res.status(200).json({
            message: "Actor List",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

module.exports = {
   addActor,
   actorList,
};
