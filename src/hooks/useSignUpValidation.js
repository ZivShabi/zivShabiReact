

import Joi from 'joi';
const phonePattern = /^[0-9]{9,11}$/
const emailPattern = /^[a-zA-Z0-9._%+-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const imageUrlPattern = /^(http|https):\/\/.*\.(jpeg|jpg|gif|png)$/
const addressPattern = /^[\w\s]{2,256}$/


const messages = {
    name: {
        'string.pattern.base': 'Name must be between 2 and 256 characters',
        'any.required': 'Name is required'
    },
    phone: {
        'string.pattern.base': 'Phone number must be between 9 and 11 digits',
        'any.required': 'Phone number is required'
    },
    email: {
        'string.pattern.base': 'Email format is invalid',
        'any.required': 'Email is required'
    },
    password: {
        'string.min': 'Password must be at least 7 characters',
        'string.max': 'Password must not exceed 20 characters',
        'any.required': 'Password is required'
    },
    confirmPassword: {
        'any.only': 'Passwords do not match',
        'any.required': 'Please confirm your password'
    },
    image: {
        'string.pattern.base': 'Image URL must be a valid URL ending with .jpeg, .jpg, .gif, or .png',
        'any.required': 'Image URL is required'
    },
    alt: {
        'string.pattern.base': 'Alt text must be between 2 and 256 characters'
    },
    address: {
        'string.pattern.base': 'Address fields must be between 2 and 256 characters',
        'any.required': '{#label} is required',
        'number.base': '{#label} must be a number',
        'number.min': '{#label} must be a positive number'
    }
}


export const signUpValidationSchema = Joi.object({
    name: Joi.object({
        first: Joi.string().min(2).max(256).required().messages(messages.name),
        middle: Joi.string().min(2).max(256).optional().messages(messages.name),
        last: Joi.string().min(2).max(256).required().messages(messages.name)
    }).required(),
    phone: Joi.string().pattern(phonePattern).required().messages(messages.phone),
    email: Joi.string().pattern(emailPattern).required().messages(messages.email),
    password: Joi.string().min(7).max(20).required().messages(messages.password),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages(messages.confirmPassword),
    image: Joi.object({
        url: Joi.string().pattern(imageUrlPattern).required().messages(messages.image),
        alt: Joi.string().min(2).max(256).optional().messages(messages.alt)
    }).optional(),
    address: Joi.object({
        state: Joi.string().min(2).max(256).optional().messages(messages.address),
        country: Joi.string().min(2).max(256).required().messages(messages.address),
        city: Joi.string().min(2).max(256).required().messages(messages.address),
        street: Joi.string().min(2).max(256).required().messages(messages.address),
        houseNumber: Joi.number().min(1).required().messages(messages.address),
        zip: Joi.number().min(1).required().messages(messages.address)
    }).required()
})