import React from 'react'
import './Form.css'

export default function CreateForm ({onSubmit, onChange, values}) {
    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="input-form"
            type="text"
            name="title"
            placeholder="title"
            value={values ? values.title : null}
            onChange={onChange}
          />
          <input
            className="input-form"
            type="text"
            name="url"
            placeholder="url"
            value={values ? values.url : null}
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