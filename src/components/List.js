import React from "react";

import "./List.css";
import { ImgBox, Caption, TransparentBox, Image } from "./styles/ImgBox";
import { Likes, Heart, LikeButton } from "./styles/Likes";
import Gallery from './styles/Gallery'

const LikeButtons = ({
  favorites,
  image,
  onClickLike,
  onClickDislike,
  user
}) => {
  if (image.users) {
    if (!user) {
      return (
        <Likes>
          <Heart>&hearts;</Heart> {image.users.length}
        </Likes>
      );
    } else if (favorites && favorites.length > 0) {
      const thisImage = favorites.find(element => image.id === element.id);
      if (thisImage) {
        return (
          <LikeButton value={image.id} onClick={onClickDislike}>
            Unlike | {image.users.length}
          </LikeButton>
        );
      }
    }
    return (
      <LikeButton value={image.id} onClick={onClickLike}>
        &hearts; Like | {image.users.length}
      </LikeButton>
    );
  } else {
    return (
      <LikeButton value={image.id} onClick={onClickLike}>
        &hearts; Like | 0
      </LikeButton>
    );
  }
};

export default function List(props) {
  const { user, images, onClickLike, onClickDislike, favorites } = props;

  return (
    <Gallery>
      {images.map(image => (
        <ImgBox key={image.id}>
          <Image src={image.url} alt={image.title} />
          <TransparentBox>
            <Caption>
              <p>{image.title}</p>
              <LikeButtons
                favorites={favorites}
                image={image}
                onClickLike={onClickLike}
                onClickDislike={onClickDislike}
                user={user}
              />
            </Caption>
          </TransparentBox>
        </ImgBox>
      ))}
    </Gallery>
  );
}
