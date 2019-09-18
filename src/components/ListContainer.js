import React from "react";
import { getImages, likes } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.likes(event.target.value)
  }

  render() {
    return <List images={this.props.images} user={this.props.user} onClick={this.onClick}/>;
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    user: state.user
  };
}

const mapDispatchToProps = { getImages, likes };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
