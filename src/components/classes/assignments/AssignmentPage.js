import React, { Component } from "react";
import ClassSidebar from "../ClassSidebar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";
import $ from "jquery";
import SubmitCard from "./SubmitCard";

class AssignmentPage extends Component {
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
    console.log(this.props);
    const { profile, assignment, auth } = this.props;
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
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    if (this.props.class && this.props.assignment) {
      return (
        <div className="assignment-page" style={{ paddingTop: "100px" }}>
          {sidenav}
          <div className="assignment-container container">
            <div className="assignment-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to={"/class/" + this.props.class.id + "/overview"}>
                      {this.props.class.name}
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {assignment.title}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="assignment-jumbotron">
                  <div class="jumbotron">
                    <h1 class="display-4">{assignment.title} </h1>
                    <p>
                      Due {moment(assignment.dueAt.toDate()).calendar()} &nbsp;
                      Assigned {moment(assignment.startAt.toDate()).calendar()}
                      &nbsp; &nbsp; &nbsp; &nbsp; Comments
                    </p>
                    <hr class="my-4" />
                    <p className="lead">{assignment.longDescription}</p>
                  </div>
                </div>
              </div>
              {/* Submit work start */}
              <div className="col-6 col-md-4">
                <SubmitCard cardProps={this.props} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, initProps) => {
  console.log(state);
  const aclass = state.firestore.ordered.classes
    ? state.firestore.ordered.classes[0]
    : null;
  const assignment = state.firestore.ordered.assignments
    ? state.firestore.ordered.assignments[0]
    : null;
  return {
    class: aclass,
    profile: state.firebase.profile,
    assignment: assignment,
    auth: state.firebase.auth,
    events: state.firestore.ordered.assignmentEvents,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (
      props.match.params.classid &&
      props.match.params.assignmentid &&
      props.class
    ) {
      return [
        { collection: "classes", doc: props.match.params.classid },
        {
          collection: "assignments",
          doc: props.match.params.assignmentid,
        },
        {
          collection: "assignmentEvents",
          where: ["classid", "==", props.match.params.classid],
          where: ["userid", "==", props.auth.uid],
          where: ["assignmentid", "==", props.match.params.assignmentid],
          orderBy: ["date", "desc"],
        },
      ];
    } else {
      return [
        { collection: "classes" },
        { collection: "assignments" },
        { collection: "assignmentEvents" },
      ];
    }
  })
)(AssignmentPage);
