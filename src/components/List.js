import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

import "./List.css";

const LikeButtons = ({ favorites, image, onClickLike, onClickDislike }) => {
  if (image.users) {
    if (favorites && favorites.length > 0) {
      const thisImage = favorites.find(element => image.id === element.id);
      if (thisImage) {
        return (
          <button
            className="like-button"
            value={image.id}
            onClick={onClickDislike}
          >
            Unlike | {image.users.length}
          </button>
        );
      }
    }
    return (
      <button className="like-button" value={image.id} onClick={onClickLike}>
        &hearts; Like | {image.users.length}
      </button>
    );
  } else {
    return <div>Loading...</div>
  }
};

export default function List({
  user,
  images,
  onClickLike,
  onClickDislike,
  favorites
}) {
  return (
    <div>
      {!user ? <LoginFormContainer /> : <CreateFormContainer />}
      <div className="gallery-image">
        {images.map(image => (
          <div className="img-box" key={image.id}>
            <img className="city-photo" src={image.url} alt={image.title} />
            <div className="transparent-box">
              <div className="caption">
                <p>{image.title}</p>
                <LikeButtons
                  favorites={favorites}
                  image={image}
                  onClickLike={onClickLike}
                  onClickDislike={onClickDislike}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
