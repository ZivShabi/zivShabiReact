

import '../../styles/inputForm.css'

function Input({ name, label, value, onChange, error, required }) {
    const isValid = !error && value !== ''

    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                {required && <span className="text-danger"> *</span>}
            </label>
            <input
                type="text"
                className={`form-control ${error ? 'is-invalid' : isValid ? 'is-valid' : ''}`}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                aria-describedby={`${name}Help`}
            />
            {error && <div className="invalid-feedback">{error}</div>}
            {isValid && <div className="valid-feedback">Looks good!</div>}
        </div>
    )
}

export default Input


