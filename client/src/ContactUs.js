import React from "react";
// import BasicNav from "./BasicNav";
// import MogollonNav from "./MogollonNav";

function ContactUs(props) {
  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">Miles</div>
          <div className="col-md-6">
            <h4>Talk to us</h4>
            Do you have a project you would like to discuss? Or just want to get
            in contact with us? Please fill out the form below and I will get
            back to you as soon as possible.
            <div>
              <form className="d-flex">
                <label>
                  Name
                  <input />
                </label>
                <label>
                  Email
                  <input />
                </label>
                <label>
                  Message
                  <input type="text-area" />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
