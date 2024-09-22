import React, { useState } from 'react'
import Input from '../components/common/Input'
import DisplaysStructureSection from '../components/common/DisplaysStructureSection'
import { formFieldsContact, formValidationSchema, contactInfo, socialLinks } from '../hooks/useContactPage'
import '../styles/contactPage.css'

function ContactPage() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [serverError, setServerError] = useState('')

    function handleChange(e) {
        const { name, value } = e.target
        setFormState((prevState) => ({ ...prevState, [name]: value }))
    }

    const validateForm = () => {
        const { error } = formValidationSchema.validate(formState, { abortEarly: false })
        if (error) {
            const validationErrors = error.details.reduce((acc, curr) => {
                acc[curr.path.join('.')] = curr.message
                return acc
            }, {})
            setErrors(validationErrors)
            return false
        }
        setErrors({})
        return true
    }

    async function onSubmitContactPage(data) {
        try { resetForm(data) }
        catch (error) {
            console.error('Error submitting form', error)
            setServerError('Error submitting form. Please try again.')
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (validateForm()) { await onSubmitContactPage(formState) }
    }

    return (
        <div className="container mt-5 container-Contact-Page contact-Page-Title">
            <h2>Contact Us</h2>
            {serverError && <div className="alert alert-danger">{serverError}</div>}

            <form onSubmit={handleSubmit}>
                {formFieldsContact.map((field) => (
                    <Input
                        key={field.id}
                        label={field.label}
                        name={field.id}
                        type={field.type}
                        value={formState[field.id]}
                        onChange={handleChange}
                        error={errors[field.id]}
                    />
                ))}
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            <div className='contact-Information'>
                <DisplaysStructureSection
                    sectionTitle="Contact Information"
                    listItems={contactInfo}
                    socialLinks={socialLinks}
                />
            </div>
        </div>
    )
}

export default ContactPage
