import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer';

export default class List extends React.Component {
  render() {
    return (
      <div>
        {!this.props.user ? <LoginFormContainer /> : <CreateFormContainer />}
        {this.props.images.map(image =>
          <div key={image.id}>
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title} />
          </div>
        )}
      </div>
    )
  }
}