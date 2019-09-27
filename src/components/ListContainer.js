import React from "react";
import { getImages, likes, dislikes } from "../actions";
import { connect } from "react-redux";
import List from "./List";
import TopMenu from "./TopMenu";

import HeaderText from './styles/HeaderText'

class ListContainer extends React.Component {
  state = {
    addingImage: false,
    loggingIn: false,
    signingUp: false
  };

  componentDidMount() {
    this.props.getImages();
  }

  onClickLike = event => {
    event.preventDefault();
    const newFavoriteImage = this.props.images.find(
      image => image.id === parseInt(event.target.value)
    );
    this.props.likes(event.target.value, newFavoriteImage);
  };

  onClickDislike = event => {
    event.preventDefault();
    this.props.dislikes(event.target.value);
  };

  showLogInForm = () => {
    this.setState({
      loggingIn: !this.state.loggingIn,
      signingUp: false
    });
  };

  showImageForm = () => {
    this.setState({
      addingImage: !this.state.addingImage
    });
  };

  showSignUpForm = () => {
    this.setState({
      loggingIn: false,
      signingUp: !this.state.signingUp
    });
  }

  render() {
    return (
      <div>
        <TopMenu
          user={this.props.user}
          addingImage={this.state.addingImage}
          loggingIn={this.state.loggingIn}
          signingUp={this.state.signingUp}
          showLogInForm={this.showLogInForm}
          showImageForm={this.showImageForm}
          showSignUpForm={this.showSignUpForm}
        />
        <HeaderText>Wich one do you like the most?</HeaderText>
        <List
          images={this.props.images}
          user={this.props.user}
          favorites={this.props.favorites}
          onClickLike={this.onClickLike}
          onClickDislike={this.onClickDislike}
        />
      </div>
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
)(ListContainer);
