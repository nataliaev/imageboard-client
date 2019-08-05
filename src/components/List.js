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
            <div className="img-box" key={image.id}>
              <img className="city-photo" src={image.url} alt={image.title} />
              <div className="transparent-box">
                <div className="caption">
                  <p>{image.title}</p>
                  <button className="like-button" value={image.id} onClick={this.props.onClick}>Like</button>
                  <p>Likes: {image.likes}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}