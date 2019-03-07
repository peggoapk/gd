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
import Blogs from "./Blogs";

function App(props) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/projects" component={Projects} />
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
          <Route exact path="/blogs" component={Blogs} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
