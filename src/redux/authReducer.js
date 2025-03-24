import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./authActions";

const token = localStorage.getItem("token");
const userData = localStorage.getItem("user");
const user = userData && userData !== "undefined" ? JSON.parse(userData) : null;

const initialState = {
  user: user || null,
  isAuthenticated: !!token,
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === SIGN_IN) {
    localStorage.setItem("token", action.payload.user);
    localStorage.setItem("user", JSON.stringify(action.payload.user));
    return { ...state, user: action.payload.user, isAuthenticated: true };
  }
  if (action.type === SIGN_UP) {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("user", JSON.stringify(action.payload.user));
    return { ...state, user: action.payload.user, isAuthenticated: true };
  }
  if (action.type === SIGN_OUT) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return { user: null, isAuthenticated: false, errorMessage: null };
  }
  if (action.type === "SET_ERROR_MESSAGE") {
    return { ...state, errorMessage: action.payload };
  }
  if (action.type === "CLEAR_ERROR_MESSAGE") {
    return { ...state, errorMessage: null };
  }

  return state;
};

export default authReducer;
