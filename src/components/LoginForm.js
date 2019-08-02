import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.props.values ? this.props.values.email : null}
            onChange={this.props.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.props.values ? this.props.values.password : null}
            onChange={this.props.onChange}
          />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}