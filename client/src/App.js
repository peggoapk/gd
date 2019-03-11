import React from "react";
import "./App.css";
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

function App(props) {
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
          <div className="container">
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
