import React, { useState } from "react";

function ContactUs(props) {
  const recipient = "mgriffiths29@gmail.com";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [text, setText] = useState("");

  function sendEmail() {
    fetch(
      `/api/send-email?recipient=${recipient}&sender=${name}&email=${email}&topic=${topic}&message=${text}`
    ).catch(err => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">Contact Page</div>
          <div className="col-md-6">
            <h4>Talk to us</h4>
            Do you have a project you would like to discuss? Or just want to get
            in contact with us? Please fill out the form below and I will get
            back to you as soon as possible.
            <form className="my-3 ">
              <div className="contactForm">
                <div className="formName">
                  <label>
                    Name
                    <input
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="formEmail">
                  <label>
                    Email
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="formTopic">
                  <label>
                    Topic
                    <input
                      className="form-control"
                      type="topic"
                      name="topic"
                      value={topic}
                      onChange={e => setTopic(e.target.value)}
                    />
                  </label>
                </div>
                <div className="formMessage">
                  <label>
                    Message
                    <textarea
                      className="form-control d-flex"
                      name="text"
                      value={text}
                      onChange={e => setText(e.target.value)}
                      style={{ width: "20rem", height: "10em" }}
                    />
                  </label>
                </div>
              </div>
            </form>
            <button
              className="d-flex btn btn-outline-primary"
              onClick={sendEmail}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
