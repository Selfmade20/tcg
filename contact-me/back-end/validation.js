const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = {
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  };
  return data, schema;
};

const loginValidation = (data) => {
  const schema = {
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  };
  return (data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
