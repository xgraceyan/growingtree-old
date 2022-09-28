import React, { Component } from "react";
import Sidebar from "./sidebar";
import { isMobile } from "react-device-detect";
import SignedInNav from "./signedInNav";
import SignedOutNav from "./signedOutNav";
import signedInNav from "./signedInNav";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { auth, profile } = props;
  const navlinks = auth.uid ? <SignedInNav /> : <SignedOutNav />;
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <NavLink to="/" className="nav-link navbar-brand">
          <strong>Growing Tree</strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {navlinks}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
