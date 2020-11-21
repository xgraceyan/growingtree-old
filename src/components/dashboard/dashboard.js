import React, { Component } from "react";
import ClassList from "../classes/classList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Sidebar from "../../templates/sidebar";
import { Redirect } from "react-router-dom";

class dashboard extends Component {
  state = {
    width: window.innerWidth,
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 900;
    const sidenav = isMobile ? null : <Sidebar />;
    const { classes, auth, profile } = this.props;
    if (!auth.uid) {
      document.body.style.paddingLeft = "0px";
      return <Redirect to="/login" />;
    } else {
      if (isMobile == false) {
        document.body.style.paddingLeft = "160px";
      } else {
        document.body.style.paddingLeft = "0px";
      }
      return (
        <div className="dashboard" id="dashboard">
          {sidenav}
          <div className="dashboard-img my-auto" id="dashboard-img">
            <div className="dashboard-text container">
              <h1 className="username-text container">
                <strong>
                  {profile.firstName} {profile.lastName}{" "}
                  <h5>(@{profile.userName})</h5>
                </strong>
              </h1>
            </div>
          </div>
          <div className="dashboard-main container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="classlist">
                  <h2>
                    <strong>My Classes</strong>
                  </h2>
                  <ClassList classes={classes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    classes: state.firestore.ordered.classes,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "classes" }])
)(dashboard);
