
import React, { useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Input from '../components/common/Input'
import { formFieldsSignIn, formValidationSchema } from '../hooks/useSignInValidation'
import { useAuth } from '../contexts/auth.Contexts'
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import Joi from 'joi'

function SignIn() {
    const { login, user } = useAuth()
    const navigate = useNavigate()

    const [form, setForm] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    function validateField(name, value) {
        const schemaForField = Joi.object({ [name]: formValidationSchema.extract(name) })
        const { error } = schemaForField.validate({ [name]: value })
        return error ? error.details[0].message : null
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)
        const { error } = formValidationSchema.validate(form, { abortEarly: false })

        if (error) {
            const validationErrors = error.details.reduce((acc, currentError) => {
                acc[currentError.path[0]] = currentError.message
                return acc
            }, {})
            setErrors(validationErrors)
            setLoading(false)
        } else {
            setErrors({})
            try {
                await login(form)
                toast.success('Successfully logged in!')
                navigate('/')
            } catch (error) {
                const errorMsg = error.response?.data?.message || 'Failed to login'
                setServerError(errorMsg)
                toast.error(errorMsg)
            } finally {
                setLoading(false)
            }
        }
    }

    if (user) { return <Navigate to="/" /> }

    return (
        <div className="container container-Sign-In Sign-In">
            <PageHeader title="Sign In" description="Sign in to your account" />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    {serverError && <div className="alert alert-danger">{serverError}</div>}
                    {formFieldsSignIn.map((field) => (
                        <Input
                            key={field.id}
                            id={field.id}
                            name={field.name}
                            value={form[field.name] || ''}
                            onChange={handleChange}
                            type={field.type}
                            label={field.label}
                            required={field.required}
                            error={errors[field.name]}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <div className="my-2">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default SignIn
