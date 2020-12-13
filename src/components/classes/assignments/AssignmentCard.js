import React from "react";
import moment from "moment";

const AssignmentCard = ({ assignment, aclass }) => {
  return (
    <div className="assignment-card">
      <strong style={{ color: "#" + aclass.color }}>{assignment.title}</strong>
      <p className="text-muted">
        Due {moment(assignment.dueAt.toDate()).calendar()}
      </p>
    </div>
  );
};

export default AssignmentCard;
