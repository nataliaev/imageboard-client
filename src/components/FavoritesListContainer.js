import React from "react";
import { getImages, likes, dislikes } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class FavoritesListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  onClickLike = event => {
    event.preventDefault();
    const newFavoriteImage = this.props.images.find(image => image.id === parseInt(event.target.value))
    this.props.likes(event.target.value, newFavoriteImage);
  };

  onClickDislike = event => {
    event.preventDefault();
    this.props.dislikes(event.target.value);
  }

  render() {
    const favoriteIds = this.props.favorites.map(image => parseInt(image.id))
    const listOfFavorites = this.props.images.filter(image => favoriteIds.includes(parseInt(image.id)))

    return (
      <List
        images={listOfFavorites}
        user={this.props.user}
        favorites={this.props.favorites}
        onClickLike={this.onClickLike}
        onClickDislike={this.onClickDislike}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    user: state.user,
    favorites: state.favorites
  };
}

const mapDispatchToProps = { getImages, likes, dislikes };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesListContainer);
