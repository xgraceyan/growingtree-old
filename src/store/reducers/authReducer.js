const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login Success!");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("Login Failure..");
      return {
        ...state,
        authError: action.err.message,
      };
    case "LOGIN_GOOGLE_SUCCESS":
      console.log("Google login success");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_GOOGLE_ERROR":
      console.log("google login failed");
      return {
        ...state,
        authError: action.err.message,
      };
    case "LOGOUT_SUCCESS":
      console.log("Logout Success");
      return state;
    case "LOGOUT_ERROR":
      console.log("Logout Failure");
      return {
        ...state,
        authError: action.err.message,
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return state;
    case "SIGNUP_ERROR":
      console.log("signup failure");
      return {
        ...state,
        authError: action.err.message,
      };
  }
  return state;
};

export default authReducer;
