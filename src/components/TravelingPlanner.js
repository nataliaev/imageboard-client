import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TravelBoard from "./TravelBoard";
import City from "./City";

import HeaderText from "./styles/HeaderText";
import MenuBar from "./styles/MenuBar";
import Button from "./styles/Button";
import Flexbox from "./styles/Flexbox";

class TravelingPlanner extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    const favoriteIds = this.props.favorites.map(image => parseInt(image.id));
    const listOfFavorites = this.props.images.filter(image =>
      favoriteIds.includes(parseInt(image.id))
    );

    return (
      <div>
        <MenuBar>
          <Link to="/">
            <Button>Main page</Button>
          </Link>
        </MenuBar>
        <HeaderText>Choose your dream city!</HeaderText>
        <Flexbox>
          <TravelBoard id="favorite">
            <HeaderText>Favorites</HeaderText>
            {listOfFavorites.map(image => (
              <City id={image.id} className="city" key={image.id}>
                {image.title}
              </City>
            ))}
          </TravelBoard>

          <TravelBoard id="to-go">
            <HeaderText>Plan to go</HeaderText>
          </TravelBoard>

          <TravelBoard id="visited">
            <HeaderText>Was already</HeaderText>
          </TravelBoard>
        </Flexbox>
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

const mapDispatchToProps = { getImages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelingPlanner);
