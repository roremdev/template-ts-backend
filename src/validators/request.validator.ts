import Joi from 'joi'
/**
 * @description validation catalog schemas
 * @typedef {object} Validators
 * @property {object} comment - example of comment schema validator
 */
const validators: { [key: string]: Joi.ObjectSchema } = {
    comment: Joi.object({
        userId: Joi.string()
            .regex(/^[1-9]+[0-9]*$/)
            .message('⚠ ID must be a valid number'),
        message: Joi.string().min(1).max(150).messages({
            'string.base': '⚠ MESSAGE must be a string',
            'string.empty': '⚠ MESSAGE cannot be empty',
            'string.min': '⚠ MESSAGE cannot be void',
            'string.max': '⚠ MESSAGE must be at most 150 characters',
        }),
        tags: Joi.string()
            .valid('Software', 'Design', 'Soft Skills')
            .messages({
                'any.only': `⚠ TAGS must be a valid option:
                    - Flexetarian
                    - Vegetarian
                    - Low Carb
                `,
            }),
    }),
}
/**
 * @description validate schema request
 * @param {string} schema - schema selection
 * @param {object} args - object to validate
 * @returns {object} - joi validation object
 */
export const validate = (schema: string, args: Object): Joi.ValidationResult =>
    validators[schema].validate(args)
