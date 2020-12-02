import React from "react";

const ClassCard = ({ aclass }) => {
  return (
    <div className="general-card card">
      <div className="card-body">
        <h6 className="card-title">{aclass.name}</h6>
        <p className="card-subtitle text-muted">
          Taught by {aclass.teacherFirstName} {aclass.teacherLastName}
        </p>
      </div>
    </div>
  );
};

export default ClassCard;
