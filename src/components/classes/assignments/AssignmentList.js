import React from "react";
import { Link } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const AssignmentList = ({ assignments }) => {
  const noAssignments = assignments ? null : (
    <div className="general-card card">
      <div className="card-body">
        <h6 className="card-title">No Assignments Found</h6>
        <p className="card-subtitle text-muted">
          Your teacher hasn't assigned any assignments yet.
        </p>
      </div>
    </div>
  );
  return (
    <div className="card-list">
      {assignments &&
        assignments.map((assignment) => {
          return (
            <Link
              to={
                "/class/" + assignment.classid + "/assignment/" + assignment.id
              }
              key={assignment.id}
              className="card-link"
            >
              <AssignmentCard assignment={assignment} />
            </Link>
          );
        })}
      {noAssignments}
    </div>
  );
};

export default AssignmentList;
