import joi from "joi";
const registervalidate = joi.object({
  username: joi.string(),
  email: joi.string().required().email(),
  password: joi.string().required().min(6).max(20).messages({
    "string.base": "Trường username phải là một chuỗi",
    "string.email": "Trường email phải là một email",
    "string.empty": "Trường email không được để trống",
    "any.required": "Trường password không được để trống",
    "string.min": "Trường password không được ít hơn 6 ký tự",
    "string.max": "Trường password không được quá 20 ký tự",
  }),
});
const loginvalidate = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required(),
});

export { loginvalidate, registervalidate };
