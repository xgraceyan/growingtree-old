import React from "react";
import { Link } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const AssignmentList = ({ assignments, aclass }) => {
  const noAssignments = jQuery.isEmptyObject(assignments) ? (
    <div className="assignment-card">
      <strong>No Assignments Found</strong>
      <p className="text-muted">
        Your teacher hasn't given you any assignments due soon.
      </p>
    </div>
  ) : null;
  console.log(typeof assignments + assignments);
  return (
    <div className="card-list assignment-list card">
      <div className="card-body" style={{ padding: "15px 10px 15px 20px" }}>
        {noAssignments}
        {assignments &&
          assignments.map((assignment) => {
            return (
              <div className="assignment">
                <Link
                  to={
                    "/class/" +
                    assignment.classid +
                    "/assignment/" +
                    assignment.id
                  }
                  key={assignment.id}
                  className="card-link"
                >
                  <AssignmentCard assignment={assignment} aclass={aclass} />
                </Link>
              </div>
            );
          })}
        <div className="assignment-link">
          <Link
            to={"/class/" + aclass.id + "/assignments"}
            style={{ color: "#" + aclass.color }}
          >
            View All Assignments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentList;
