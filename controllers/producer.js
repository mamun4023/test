const producerModel = require("../models/producer");

const producerValidator = require("../validations/producer");

const addProducer = async (req, res, next) => {
   const { isValid, errors } = producerValidator(req.body);
   if (!isValid) {
      return res.status(404).json({
         message: "validation error",
         errors: errors,
      });
   }

   try {
      const { name, age, category } = req.body;
      const newProducer = new producerModel({
         name,
         age,
         category,
      });

      const result = await newProducer.save();
      if (result) {
         return res.status(200).json({
            message: "Producer has been Added",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

const producerList = async (req, res, next) => {
   try {
      const result = await producerModel.find({});
      if (result) {
         return res.status(200).json({
            message: "Producer List",
            data: result,
         });
      }
   } catch (err) {
      next(err);
   }
};

module.exports = {
   addProducer,
   producerList,
};
