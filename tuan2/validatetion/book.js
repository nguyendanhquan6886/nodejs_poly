import joi from "joi";

const createvalidate = joi.object({
  title: joi.string().required(),
  description: joi.string(),
  author: joi.string().required(),
  image: joi.string(),
  price: joi.number().min(0),
  rate: joi.number().min(1).max(5),
  // refCate: joi.string().required(),
});
const updatevalidate = joi.object({
  title: joi.string().empty(),
  description: joi.string().required(),
  author: joi.string().required(),
  image: joi.string().required(),
  price: joi.number().required().min(0),
  rate: joi.number().required().min(1).max(5),
  // refCate: joi.string().required(),
});

export { createvalidate, updatevalidate };
