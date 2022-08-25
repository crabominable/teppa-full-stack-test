/* eslint-disable no-useless-escape */
import Joi from 'joi';

import { TBodyValidate } from '../types';

const userSchema = Joi.object({
  name: Joi.string().trim().min(3).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  phone: Joi.string().regex(/^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
});

const userValidate: TBodyValidate = (body) => {
  const { error, value } = userSchema.validate(body);

  return { error, value };
};

export default userValidate;