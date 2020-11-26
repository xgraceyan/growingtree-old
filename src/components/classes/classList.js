import React from "react";
import { Link } from "react-router-dom";
import ClassCard from "./ClassCard";

const ClassList = ({ classes }) => {
  return (
    <div className="class-list">
      {classes &&
        classes.map((aclass) => {
          return (
            <Link to={"/class/" + aclass.id} key={aclass.id}>
              <ClassCard aclass={aclass} />
            </Link>
          );
        })}
    </div>
  );
};

export default ClassList;
