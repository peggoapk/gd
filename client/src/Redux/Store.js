import { createStore } from "redux";
import isEmpty from "../Validation/is-empty";
import isAdmin from "../Validation/is-admin";
import setAuthToken from "../Auth/SetAuthToken";

function reducer(state, action) {
  if (!state) {
    return {
      user: {},
      currentUser: {},
      isAuthenticated: false,
      isAdmin: false,
      authToken: setAuthToken(false)
    };
  }

  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user
    };
  }
  if (action.type === "SET_CURRENT_USER") {
    return {
      ...state,
      currentUser: action.currentUser,
      isAuthenticated: !isEmpty(action.currentUser),
      isAdmin: isAdmin(action.currentUser.id)
    };
  }
  if ((action.type = "LOGOUT_USER")) {
    return {
      ...state,
      currentUser: {},
      isAuthenticated: false,
      authToken: setAuthToken(false)
    };
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
