import { connect } from "react-redux";
import { logOut } from "../store/actions/authActions";
import { NavLink } from "react-router-dom";

const SignedInNav = (props) => {
  const { auth, profile } = props;
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>{" "}
        <span className="sr-only">(current)</span>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Discover
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Learn
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            Math
          </a>
          <a className="dropdown-item" href="#">
            English
          </a>
          <a className="dropdown-item" href="#">
            History
          </a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <strong>
            {profile.firstName} {profile.lastName}
          </strong>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            My Courses
          </a>
          <a className="dropdown-item" href="#">
            Settings
          </a>
          <a className="dropdown-item" href="#" onClick={props.logOut}>
            <strong>Log Out</strong>
          </a>
        </div>
      </li>
      <form className="nav-form form-inline d-flex form-sm">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Courses"
          ></input>
          <div className="input-group-append">
            <button className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInNav);
