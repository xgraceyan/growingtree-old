import React, { Component } from "react";
import moment from "moment";
import ClassSidebar from "./ClassSidebar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import AssignmentList from "./assignments/AssignmentList";
import { Redirect } from "react-router-dom";

class ClassPage extends Component {
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
    const { profile, assignments, auth } = this.props;
    const { width } = this.state;
    const isMobile = width <= 900;
    const sidenav =
      !isMobile && this.props.class ? (
        <ClassSidebar name={this.props.class.name} />
      ) : null;
    if (!auth.isLoaded) return null;
    if (!auth.uid) {
      document.body.style.paddingLeft = "0px";
      return <Redirect to="/login" />;
    } else {
      if (isMobile == false) {
        document.body.style.paddingLeft = "160px";
      } else {
        document.body.style.paddingLeft = "0px";
      }
    }
    if (this.props.class) {
      return (
        <div className="class-page dashboard">
          {sidenav}
          <div
            className="class-dashboard-img my-auto"
            id="dashboard-img"
            style={{ backgroundColor: "#" + this.props.class.color }}
          >
            <div className="dashboard-text container">
              <h1 className="username-text">
                <strong>
                  {this.props.class.name}
                  <h5>
                    Taught by{" "}
                    <strong>
                      {this.props.class.teacherFirstName}{" "}
                      {this.props.class.teacherLastName}
                    </strong>
                  </h5>
                </strong>
              </h1>
            </div>
          </div>
          <div className="dashboard-main container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="classlist">
                  <h2>
                    <strong>Assignments</strong>
                  </h2>
                  <AssignmentList
                    assignments={assignments}
                    aclass={this.props.class}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="classlist">
                  <h2>
                    <strong>Recent Posts</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading class...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, initProps) => {
  const aclass = state.firestore.ordered.classes
    ? state.firestore.ordered.classes[0]
    : null;
  return {
    class: aclass,
    profile: state.firebase.profile,
    assignments: state.firestore.ordered.assignments,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.match.params.id && props.class) {
      var today = new Date();
      return [
        { collection: "classes", doc: props.match.params.id },
        {
          collection: "assignments",
          where: ["classid", "==", props.match.params.id],
          //   where: ["dueAt", ">", today],
          orderBy: ["dueAt", "asc"],
        },
      ];
    } else {
      return [
        { collection: "classes" },
        { collection: "assignments", orderBy: ["dueAt", "desc"] },
      ];
    }
  })
)(ClassPage);
