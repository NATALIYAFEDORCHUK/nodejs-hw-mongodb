import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(2).max(16).required(),
  email: Joi.string().email(),
//   isFavourite: Joi.boolean().default(false),
  contactType: Joi.string().valid('male', 'female', 'other').required(),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(2).max(16).required(),
    email: Joi.string().email(),
    // isFavourite: Joi.boolean().default(false),
    contactType: Joi.string().valid('male', 'female', 'other').required(),
  });