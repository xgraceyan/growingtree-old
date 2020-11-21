import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  };
  render() {
    document.body.style.background = "url('https://i.imgur.com/KsZlumw.png')";
    document.body.style.backgroundSize = "100%";
    const { authError, auth } = this.props;
    const authAlert = (
      <div className="alert alert-danger">
        <p>{authError}</p>
      </div>
    );
    if (auth.uid) {
      document.body.style.background = "url('nothing.png')";
      return <Redirect to="/" />;
    }
    return (
      <div className="signup-form">
        <div className="container">
          {authError ? authAlert : null}
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center">Log In</h1>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                <a href="">Forgot your password?</a>
              </small>
            </div>

            <div className="d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-primary form-button text-center"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
