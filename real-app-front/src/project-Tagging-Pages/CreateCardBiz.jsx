import React, { useState } from 'react'
import Joi from 'joi'
import { createCardValidationSchema } from '../hooks/useCreateCard'
import Input from '../components/common/Input'
import { useAuth } from '../contexts/auth.Contexts'
import PageHeader from '../components/common/PageHeader'
function CreateCardBiz() {
    const { createNewBusinessCard } = useAuth()

    const [form, setForm] = useState({
        title: '', subtitle: '', description: '', phone: '', email: '', web: '',
        image: { url: '', alt: '' },
        address: { state: '', country: '', city: '', street: '', houseNumber: '', zip: '' }
    })

    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
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

    function validateField(name, value) {
        const schemaForField = Joi.object({ [name]: createCardValidationSchema.extract(name) })
        const { error } = schemaForField.validate({ [name]: value })
        return error ? error.details[0].message : null
    }

    function handleSubmit(event) {
        event.preventDefault()
        const { error } = createCardValidationSchema.validate(form, { abortEarly: false })
        if (error) {
            const validationErrors = error.details.reduce((acc, currentError) => {
                acc[currentError.path.join('.')] = currentError.message
                return acc
            }, {})
            setErrors(validationErrors)
        } else {
            setErrors({})
            createNewBusinessCard(form)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='container-Create-Card-Biz Create-Card-Biz '>
            <PageHeader
                title="Create Card Biz"
                description="Create a new business card now!"
            />
            <Input
                label="Title"
                name="title"
                value={form.title}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, title: validateField('title', e.target.value)
                    }))
                }}
                error={errors.title}
                required
            />
            <Input
                label="Subtitle"
                name="subtitle"
                value={form.subtitle}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, subtitle: validateField('subtitle', e.target.value)
                    }))
                }}
                error={errors.subtitle}
                required
            />
            <Input
                label="Description"
                name="description"
                value={form.description}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, description: validateField('description', e.target.value)
                    }))
                }}
                error={errors.description}
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
                label="Website"
                name="web"
                value={form.web}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, web: validateField('web', e.target.value)
                    }))
                }}
                error={errors.web}
                optional
            />
            <Input
                label="Image URL"
                name="image.url"
                value={form.image.url}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'image.url': validateField('image.url', e.target.value)
                    }))
                }}
                error={errors['image.url']}
                required
            />
            <Input
                label="Image Alt"
                name="image.alt"
                value={form.image.alt}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'image.alt': validateField('image.alt', e.target.value)
                    }))
                }}
                error={errors['image.alt']}
                optional
            />
            <Input
                label="State"
                name="address.state"
                value={form.address.state}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'address.state': validateField('address.state', e.target.value)
                    }))
                }}
                error={errors['address.state']}
                optional
            />
            <Input
                label="Country"
                name="address.country"
                value={form.address.country}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'address.country': validateField('address.country', e.target.value)
                    }))
                }}
                error={errors['address.country']}
                required
            />
            <Input
                label="City"
                name="address.city"
                value={form.address.city}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'address.city': validateField('address.city', e.target.value)
                    }))
                }}
                error={errors['address.city']}
                required
            />
            <Input
                label="Street"
                name="address.street"
                value={form.address.street}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'address.street': validateField('address.street', e.target.value)
                    }))
                }}
                error={errors['address.street']}
                required
            />
            <Input
                label="House Number"
                name="address.houseNumber"
                value={form.address.houseNumber}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        'address.houseNumber': validateField('address.houseNumber', e.target.value)
                    }))
                }}
                error={errors['address.houseNumber']}
                required
            />
            <Input
                label="Zip Code"
                name="address.zip"
                value={form.address.zip}
                onChange={(e) => {
                    handleChange(e)
                    setErrors((prevErrors) => ({
                        ...prevErrors, 'address.zip': validateField('address.zip', e.target.value)
                    }))
                }}
                error={errors['address.zip']}
                optional
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default CreateCardBiz
