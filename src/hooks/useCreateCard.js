import Joi from 'joi';

// Patterns
const titlePattern = /^[\w\s]{2,256}$/;
const subtitlePattern = /^[\w\s]{2,256}$/;
const descriptionPattern = /^.{2,1024}$/;
const phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const webPattern = /^.{14,}$/;
const imageUrlPattern = /^https?:\/\/.+/;
const altPattern = /^[\w\s]{2,256}$/;
const addressPattern = /^[\w\s]{2,256}$/;

// Error Messages
const titleErrorMsg = 'Title must be between 2 and 256 characters long and can only include letters and numbers';
const subtitleErrorMsg = 'Subtitle must be between 2 and 256 characters long and can only include letters and numbers';
const descriptionErrorMsg = 'Description must be between 2 and 1024 characters long';
const phoneErrorMsg = 'Phone number must be between 9 and 11 digits long';
const emailErrorMsg = 'Email must be a valid email address';
const webErrorMsg = 'Website URL must be at least 14 characters long';
const imageUrlErrorMsg = 'Image URL must be a valid URL';
const altErrorMsg = 'Image alt text must be between 2 and 256 characters long';
const addressErrorMsg = 'Address fields must be between 2 and 256 characters long';
const houseNumberErrorMsg = 'House number must be at least 1';

// Validation Schema
export const createCardValidationSchema = Joi.object({
    title: Joi.string().pattern(titlePattern).message(titleErrorMsg).required(),
    subtitle: Joi.string().pattern(subtitlePattern).message(subtitleErrorMsg).required(),
    description: Joi.string().pattern(descriptionPattern).message(descriptionErrorMsg).required(),
    phone: Joi.string().pattern(phonePattern).message(phoneErrorMsg).required(),
    email: Joi.string().pattern(emailPattern).message(emailErrorMsg).required(),
    web: Joi.string().pattern(webPattern).message(webErrorMsg).optional(),
    image: Joi.object({
        url: Joi.string().pattern(imageUrlPattern).message(imageUrlErrorMsg).required(),
        alt: Joi.string().pattern(altPattern).message(altErrorMsg).optional()
    }).required(),
    address: Joi.object({
        state: Joi.string().pattern(addressPattern).message(addressErrorMsg).optional(),
        country: Joi.string().pattern(addressPattern).message(addressErrorMsg).required(),
        city: Joi.string().pattern(addressPattern).message(addressErrorMsg).required(),
        street: Joi.string().pattern(addressPattern).message(addressErrorMsg).required(),
        houseNumber: Joi.number().min(1).message(houseNumberErrorMsg).required(),
        zip: Joi.number().optional()
    }).required()
});




