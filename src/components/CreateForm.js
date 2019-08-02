import React from 'react'

export default class CreateForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.props.values ? this.props.values.title : null}
            onChange={this.props.onChange}
          />
          <input
            type="text"
            name="url"
            placeholder="url"
            value={this.props.values ? this.props.values.url : null}
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