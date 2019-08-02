import React from 'react'
import './Form.css'

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.onSubmit}>
          <h2 className="form-title">Log in to add a photo</h2>
          <input
            className="input-form"
            type="text"
            name="email"
            placeholder="email"
            value={this.props.values ? this.props.values.email : null}
            onChange={this.props.onChange}
          />
          <input
            className="input-form"
            type="password"
            name="password"
            placeholder="password"
            value={this.props.values ? this.props.values.password : null}
            onChange={this.props.onChange}
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
}