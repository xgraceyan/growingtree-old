const SignedOutNav = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
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
      <li className="nav-item">
        <a className="nav-link" href="#">
          <strong>Sign Up</strong>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Log In
        </a>
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

export default SignedOutNav;
