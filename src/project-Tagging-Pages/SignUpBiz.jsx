import Joi from 'joi'
import React, { useState } from 'react'
import Input from '../components/common/Input'
import { useAuth } from '../contexts/auth.Contexts'
import PageHeader from '../components/common/PageHeader'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../components/common/Spinner'
import { useNavigate, Navigate } from "react-router-dom"
import { signUpBizValidationSchema, } from '../hooks/useSignUpBizValidation'


function SignUpBiz() {
    const { register, user } = useAuth()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: { first: '', middle: '', last: '' },
        phone: '', email: '', password: '', confirmPassword: '',
        image: { url: '', alt: '' },
        address: { state: '', country: '', city: '', street: '', houseNumber: '', zip: '' }
    });
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const notifySuccess = (message) => toast.success(message)
    const notifyError = (message) => toast.error(message)



    function validateField(name, value) {
        const schemaForField = Joi.object({ [name]: signUpBizValidationSchema.extract(name) })
        const { error } = schemaForField.validate({ [name]: value })
        return error ? error.details[0].message : null
    }

    function handleChange(event) {
        const { name, value } = event.target
        const nameParts = name.split('.')

        setForm(prevForm => {
            let updatedForm = { ...prevForm }
            let current = updatedForm

            for (let i = 0; i < nameParts.length - 1; i++) {
                current[nameParts[i]] = { ...current[nameParts[i]] }
                current = current[nameParts[i]]
            }
            current[nameParts[nameParts.length - 1]] = value
            return updatedForm
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)

        const { error } = signUpBizValidationSchema.validate(form, { abortEarly: false })
        if (error) {
            const validationErrors = error.details.reduce((acc, curr) => {
                acc[curr.path.join('.')] = curr.message
                return acc
            }, {})
            setErrors(validationErrors)
        } else {
            setErrors({})
            const payload = {
                name: form.name,
                phone: form.phone,
                email: form.email,
                password: form.password,
                image: form.image,
                address: form.address,
                isBusiness: true
            }
            try {
                await register(payload)
                notifySuccess('Registration successful!')
                navigate('/sign-in')
            } catch (error) {
                notifyError('Registration failed! Please try again.')
                console.error('Registration failed:', error.response.data)
                setErrors({ general: 'Registration failed. Please try again.' })
            }
        }
        setLoading(false)
    }
    if (user) { return <Navigate to="/" /> }

    return (
        <form onSubmit={handleSubmit} className='container-Sign-Up-Biz Sign-Sign-Up-Biz '>
            <PageHeader
                title="Sign Up Biz"
                description="Create your business account now!" />
            {loading && <Spinner />}

            <Input
                label="First Name"
                name="name.first"
                value={form.name.first}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, name: {
                            ...prevErrors.name, first: validateField('name.first', e.target.value)
                        }
                    }))
                }}
                error={errors.name?.first}
                required
            />

            <Input
                label="Middle Name"
                name="name.middle"
                value={form.name.middle}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, name: {
                            ...prevErrors.name, middle: validateField('name.middle', e.target.value)
                        }
                    }))
                }}
                error={errors.name?.middle}
            />
            <Input
                label="Last Name"
                name="name.last"
                value={form.name.last}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, name: {
                            ...prevErrors.name, last: validateField('name.last', e.target.value)
                        }
                    }))
                }}
                error={errors.name?.last}
                required
            />
            <Input
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, phone: validateField('phone', e.target.value)
                    }))
                }}
                error={errors.phone}
                required
            />
            <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, email: validateField('email', e.target.value)
                    }))
                }}
                error={errors.email}
                required
            />
            <Input
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, password: validateField('password', e.target.value)
                    }))
                }}
                error={errors.password}
                required
            />
            <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, confirmPassword: validateField('confirmPassword', e.target.value)
                    }))
                }}
                error={errors.confirmPassword}
                required
            />
            <Input
                label="Image URL"
                name="image.url"
                value={form.image.url}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, image: {
                            ...prevErrors.image, url: validateField('image.url', e.target.value)
                        }
                    }))
                }}
                error={errors.image?.url}
                required
            />
            <Input
                label="Image Alt"
                name="image.alt"
                value={form.image.alt}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, image: {
                            ...prevErrors.image, alt: validateField('image.alt', e.target.value)
                        }
                    }))
                }}
                error={errors.image?.alt}
            />
            <Input
                label="State"
                name="address.state"
                value={form.address.state}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, address: {
                            ...prevErrors.address, state: validateField('address.state', e.target.value)
                        }
                    }))
                }}
                error={errors.address?.state}
            />
            <Input
                label="Country"
                name="address.country"
                value={form.address.country}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, address: {
                            ...prevErrors.address, country: validateField('address.country', e.target.value)
                        }
                    }))
                }}
                error={errors.address?.country}
                required
            />
            <Input
                label="City"
                name="address.city"
                value={form.address.city}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, address: {
                            ...prevErrors.address, city: validateField('address.city', e.target.value)
                        }
                    }))
                }}
                error={errors.address?.city}
                required
            />
            <Input
                label="Street"
                name="address.street"
                value={form.address.street}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, address: {
                            ...prevErrors.address, street: validateField('address.street', e.target.value)
                        }
                    }))
                }}
                error={errors.address?.street}
                required
            />
            <Input
                label="House Number"
                name="address.houseNumber"
                value={form.address.houseNumber}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, address: {
                            ...prevErrors.address,
                            houseNumber: validateField('address.houseNumber', e.target.value)
                        }
                    }))
                }}
                error={errors.address?.houseNumber}
                required
            />
            <Input
                label="ZIP Code"
                name="address.zip"
                value={form.address.zip}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, address: {
                            ...prevErrors.address, zip: validateField('address.zip', e.target.value)
                        }
                    }))
                }}
                error={errors.address?.zip}
                required
            />
            <button type="submit">Sign Up Biz</button>
            <ToastContainer />
        </form>
    )
}

export default SignUpBiz