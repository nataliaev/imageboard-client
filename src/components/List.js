import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer';

import './List.css'

export default function List ({user, images, onClick}) {
    return (
      <div>
        {!user ? <LoginFormContainer /> : <CreateFormContainer />}
        <div className="gallery-image">
          {images.map(image =>
            <div className="img-box" key={image.id}>
              <img className="city-photo" src={image.url} alt={image.title} />
              <div className="transparent-box">
                <div className="caption">
                  <p>{image.title}</p>
                  <button className="like-button" value={image.id} onClick={onClick}>&hearts; Like | {image.users.length}</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }