import React from "react";
import ClassPage from "./ClassPage";

const ClassSidebar = ({ name }) => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">{name}</a>
        </li>
        <li>
          <a href="">Assignments</a>
        </li>
        <li>
          <a href="">Posts</a>
        </li>
        <li>
          <a href="">Grades</a>
        </li>
        <li>
          <a href="">Calendar</a>
        </li>
        <li>
          <a href="">People</a>
        </li>
      </ul>
    </div>
  );
};

export default ClassSidebar;
