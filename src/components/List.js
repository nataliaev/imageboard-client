import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer';

import './List.css'

export default class List extends React.Component {
  render() {
    return (
      <div>
        {!this.props.user ? <LoginFormContainer /> : <CreateFormContainer />}
        <div className="gallery-image">
          {this.props.images.map(image =>
            <div class="img-box" key={image.id}>
              <img className="city-photo" src={image.url} alt={image.title} />
              <div class="transparent-box">
                <div class="caption">
                  <p>{image.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}