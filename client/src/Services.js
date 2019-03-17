import React from "react";
import styles from "./css/Services.module.css";

export const Services = () => {
  return (
    <>
      <h1 className="text-center">Our Services</h1>
      <hr className={styles.hr} />
      <div className="mb-3">
        Mogollon design specializes in picking the perfect finishes and unique
        design for your home. We will work closely with you to make sure no
        detail is over looked.
      </div>
      <div className="row">
        <div className="col-md-6">
          <ul className="ml-3">
            <h3>Remodel or new build</h3>
            <li>Initial consult</li>
            <li>Walk through</li>
            <li>Meeting with builders and contractors</li>
            <li>Design plans</li>
            <li>Shopping and ordering</li>
            <li>Installation</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="ml-3">
            <h3>Staging</h3>
            <li>Initial consult</li>
            <li>Walk through</li>
            <li>
              Provide or use homeowners furniture and decor for staging the home
            </li>
            <li>Set up staging</li>
            <li>De-staging once home is sold</li>
            <li>Installation</li>
          </ul>
        </div>
      </div>
      <div>
        Pricing Depends on the room and scale of the project. All services are
        charged at an hourly rate.
      </div>
      <hr className={styles.hr} />
      <div className="testimonials pb-4">
        <h1 className="text-center">Testimonials</h1>"
        <em>
          I hired Adair for a remodel of a cottage to turn it into an Airbnb
          here in Flagstaff. The ideas she had were more than I could have ever
          hoped for. From the wall treatment to the color, placement of the
          light fixtures, design of the kitchen to the outdoor space. She was a
          delight to work with and I look forward to her next ideas.
        </em>
        " - Rosemary Lamberson
      </div>
    </>
  );
};

export default Services;
