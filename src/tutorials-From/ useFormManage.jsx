// import { useState } from 'react';
// export function useForm(initialState = {}, validationSchema) {
//     const [formState, setFormState] = useState(initialState);
//     const [errors, setErrors] = useState({});
//     const [serverError, setServerError] = useState('');

//     function validate(values) {
//         const { error } = validationSchema.validate(values, { abortEarly: false });
//         if (!error) return {};
//         const errors = {};
//         for (const detail of error.details) {
//             errors[detail.path[0]] = detail.message;
//         }
//         return errors;
//     };

//     function handleChange(e) {
//         const { name, value, type, checked } = e.target;

//         setFormState((prev) => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//         setServerError('');
//         if (validationSchema) {
//             const validationErrors = validate({ ...formState, [name]: type === 'checkbox' ? checked : value, });
//             setErrors(validationErrors);
//         }
//     };

//     async function handleSubmit(onSubmit) {
//         const validationErrors = validate(formState);
//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//             try {
//                 await onSubmit(formState);
//                 resetForm();
//             } catch (err) {
//                 handleServerError(err);
//             }
//         }
//     }


//     function handleServerError(err) {
//         if (err.response) {
//             const { status, data } = err.response;
//             if (status === 400) {
//                 setServerError(data.message || 'Invalid request data');
//             } else if (status === 401) {
//                 setServerError('Unauthorized access - please log in again');
//             } else if (status === 500) {
//                 setServerError('Server error - please try again later');
//             } else {
//                 setServerError('An unexpected error occurred');
//             }
//         } else {
//             setServerError('Network error - please check your connection');
//         }
//     }


//     function resetForm() {
//         setFormState(initialState);
//         setErrors({});
//         setServerError('');
//     };

//     return {
//         formState,
//         errors,
//         serverError,
//         handleChange,
//         handleSubmit,
//         resetForm,
//         setServerError,
//     };
// }
// useForm.js
// import { useState, useEffect } from 'react';

// function useForm({ initialValues, onSubmit, validate }) {
//     const [form, setForm] = useState(initialValues);
//     const [errors, setErrors] = useState(null);

//     useEffect(() => {
//         const validationErrors = validate(form);
//         setErrors(validationErrors);
//     }, [form, validate]);

//     const handleChange = (e) => {
//         setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(form);
//     };

//     return { form, handleChange, handleSubmit, errors };
// }

// export default useForm;
