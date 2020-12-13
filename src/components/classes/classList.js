import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "./ClassCard";

const ClassList = ({ classes }) => {
  const noClasses = classes ? null : (
    <div className="general-card card">
      <div className="card-body">
        <h6 className="card-title">No Classes Found</h6>
        <p className="card-subtitle text-muted">
          Click the "Explore" tab to view classes
        </p>
      </div>
    </div>
  );
  return (
    <div className="card-list">
      {classes &&
        classes.map((aclass) => {
          return (
            <Link
              to={"/class/" + aclass.id + "/overview"}
              key={aclass.id}
              className="card-link"
            >
              <ClassCard aclass={aclass} />
            </Link>
          );
        })}
      {noClasses}
    </div>
  );
};

export default ClassList;
