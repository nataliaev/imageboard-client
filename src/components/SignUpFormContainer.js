import React from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { login } from "../actions";
import request from "superagent";

const baseUrl =  "http://localhost:4000";

//'https://safe-sea-63608.herokuapp.com' || 

class SignUpFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = async event => {
    event.preventDefault();
    request
      .post(`${baseUrl}/user`)
      .send({email : this.state.email, password : this.state.password})
      .then(() => this.props.login(this.state.email, this.state.password))
      .catch(console.error);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { login }
)(SignUpFormContainer);
