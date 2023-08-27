import { Validator } from 'jsonschema';

const eventSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    // Define properties and constraints for the rules object
    // Example:
    product: { type: 'string' },
    price: { type: 'number' },
    currency: { type: 'string' }
  },
  required: ['product', 'price', 'currency'],
};

const validator = new Validator();

export const jsonSchema = (data: any) => {
  return validator.validate(data, eventSchema).valid;
};
