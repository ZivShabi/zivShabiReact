import Joi from 'joi';
export const formFieldsSignIn = [
    { id: 'email', name: 'email', label: 'Email', type: 'email', required: true },
    { id: 'password', name: 'password', label: 'Password', type: 'password', required: true },
]

const generateValidator = (field) => {
    let validator = Joi.string().max(255)
    // .label(field.label)

    if (field.type === 'email') {
        validator = Joi.string().min(2).email({ tlds: { allow: false } });
    }


    if (field.required) {
        validator = validator.required()
    }

    if (field.name === 'password') {
        validator = validator.min(6).max(1024)
    }
    return validator;
}

export const formValidationSchema = Joi.object(
    formFieldsSignIn.reduce((schema, field) => {
        schema[field.name] = generateValidator(field);
        return schema;
    }, {})
)


