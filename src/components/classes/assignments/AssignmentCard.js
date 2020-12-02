import React from "react";
import moment from "moment";

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="general-card card">
      <div className="card-body">
        <h6 className="card-title">{assignment.title}</h6>
        <p className="card-subtitle text-muted">
          Due {moment(assignment.dueAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default AssignmentCard;
