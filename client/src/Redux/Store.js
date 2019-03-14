import { createStore } from "redux";
import isEmpty from "../Validation/is-empty";
import setAuthToken from "../Auth/SetAuthToken";

function reducer(state, action) {
  if (!state) {
    return {
      user: {},
      currentUser: {},
      isAuthenticated: false,
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
      isAuthenticated: !isEmpty(action.currentUser)
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
