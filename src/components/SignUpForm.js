import React from 'react'
import './Form.css'

export default function SignUpForm ({ onSubmit, onChange, values }) {
    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form-title">Sign Up</h2>
          <input
            className="input-form"
            type="text"
            name="email"
            placeholder="email"
            value={values ? values.email : null}
            onChange={onChange}
          />
          <input
            className="input-form"
            type="password"
            name="password"
            placeholder="password"
            value={values ? values.password : null}
            onChange={onChange}
          />
          <input
            className="input-button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }