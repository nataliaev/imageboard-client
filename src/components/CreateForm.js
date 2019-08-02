import React from 'react'
import './Form.css'

export default class CreateForm extends React.Component {
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.onSubmit}>
          <h2 className="form-title">Add a photo</h2>
          <input
            className="input-form"
            type="text"
            name="title"
            placeholder="title"
            value={this.props.values ? this.props.values.title : null}
            onChange={this.props.onChange}
          />
          <input
            className="input-form"
            type="text"
            name="url"
            placeholder="url"
            value={this.props.values ? this.props.values.url : null}
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