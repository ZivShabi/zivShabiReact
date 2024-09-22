import Joi from 'joi';

export const formFieldsContact = [
    { id: 'name', name: 'name', label: 'Your Name', type: 'text', placeholder: 'John', required: true },
    { id: 'email', name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
    { id: 'message', name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message here...', required: true },
];

const generateValidator = (field) => {
    let validator = Joi.string().max(255).label(field.label);

    if (field.type === 'email') {
        validator = Joi.string().min(6).max(255).email({ tlds: { allow: false } }).required().label(field.label);
    }

    if (field.name === 'message') {
        validator = Joi.string().min(10).required().label(field.label);
    }

    if (field.required) {
        validator = validator.required();
    } else {
        validator = validator.allow(null, '');
    }

    return validator;
};

export const formValidationSchema = Joi.object(
    formFieldsContact.reduce((schema, field) => {
        schema[field.name] = generateValidator(field);
        return schema;
    }, {})
);

export const contactInfo = [
    { icon: "bi bi-house-door", text: "1234 Street Name, City, Country" },
    { icon: "bi bi-telephone", text: "+123 456 7890" },
    { icon: "bi bi-envelope", text: "contact@yourcompany.com" },
];

export const socialLinks = [
    { icon: "bi bi-facebook", url: "https://facebook.com" },
    { icon: "bi bi-twitter", url: "https://twitter.com" },
    { icon: "bi bi-linkedin", url: "https://linkedin.com" },
    { icon: "bi bi-instagram", url: "https://instagram.com" },
];
