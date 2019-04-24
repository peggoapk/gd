import React, { useEffect } from "react";
import "./css/App.css";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Landing from "./Landing";
import Remodel from "./Remodel";
import BeforeGallery from "./BeforeGallery";
import AfterGallery from "./AfterGallery";
import Blogs from "./Blogs/Blogs";
import ContactUs from "./ContactUs";
import MogollonNav from "./MogollonNav";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Services from "./Services";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Auth/SetAuthToken";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import SelectedBlog from "./Blogs/SelectedBlog";
import CreateEditBlog from "./Blogs/CreateEditBlog";

function App(props) {
  useEffect(checkProps, []);

  function checkProps(prevProps) {
    if (prevProps !== props) {
      // check for token
      if (localStorage.jwtToken) {
        //set auth token
        setAuthToken(localStorage.jwtToken);
        // decode token and get user info and exp
        const decoded = jwt_decode(localStorage.jwtToken);
        // set user and isAuthenticated
        props.setCurrentUser(decoded);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          props.logoutUser({});
          props.history.push("/login");
        }
      }
    }
  }
  return (
    <>
      <div>
        <MogollonNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route
            exact
            path={"/projects/remodels/:imageId(\\d+)"}
            component={Remodel}
          />
          <Route
            exact
            path={"/projects/remodels/:imageId(\\d+)/beforeGallery"}
            component={BeforeGallery}
          />
          <Route
            exact
            path={"/projects/remodels/:imageId(\\d+)/afterGallery"}
            component={AfterGallery}
          />
        </Switch>
        <div className="container">
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route
            exact
            path={["/blogs/createEdit", "/blogs/createEdit/:blogId"]}
            component={CreateEditBlog}
          />
          <Route exact path="/blogs/:blogId" component={SelectedBlog} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <NotificationContainer />
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: currentUser =>
      dispatch({ type: "SET_CURRENT_USER", currentUser }),
    logoutUser: currentUser => dispatch({ type: "LOGOUT_USER", currentUser })
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
