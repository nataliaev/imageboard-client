import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TravelBoard from "./TravelBoard";
import City from "./City";

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
        <div className="menu-bar">
          <Link to="/">
            <button className="input-button">Main page</button>
          </Link>
        </div>
        <h1 className="favorites">Choose your dream city!</h1>
        <div className="flexbox">
          <TravelBoard id="favorite" className="board">
            <h1 className="favorites">Favorites</h1>
            {listOfFavorites.map(image => (
              <City id={image.id} className="city" key={image.id}>
                {image.title}
              </City>
            ))}
          </TravelBoard>

          <TravelBoard id="visited" className="board">
            <h1 className="favorites">Plan to go</h1>
          </TravelBoard>

          <TravelBoard id="visited" className="board">
            <h1 className="favorites">Was already</h1>
          </TravelBoard>
        </div>
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
