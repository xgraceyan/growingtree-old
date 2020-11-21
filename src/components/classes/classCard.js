import React from "react";
import classList from "./classList";

const classCard = ({ aclass }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{aclass.name}</h6>
        <p className="card-subtitle text-muted">
          Taught by {aclass.teacherFirstName} {aclass.teacherLastName}
        </p>
      </div>
    </div>
  );
};

export default classCard;
