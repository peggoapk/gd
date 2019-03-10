import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <section className="hero">
        <div
          className="background-image"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/3KWPFPqvm5CwHnEXWH_63ETjU9OobLKS-hl4TyUWt0sNCewpKX8H_P73ZFseut_t0c_h1G_LHEgIcuIPU9lCq12gYOZiRVvdhAvqCGV7TKAbe1lkQHJJU7J5yN9MV9YjOhekpSs0Ju9_6Kj-8isaBmeq5ZyEjbidrxrhM_frJlzQgFBAV_6t4m99g9WxnGIBrsJCvJyPbEL5PbVkgsUrGJvqyotXI_ohjuzT__5M-6F0aPAFRiXqHk_FniDmAvhcnzadd8OdNO-ux3B1Dsr3XPc6XQbvS1mZ87M99Mj_p2RsBG93ENoM_PSV0TOW2ajl9RJM32aDpq0hpQdKLiSYOrVaL0A7hl82CtrOczz1xG-05TORxZX2aDesh1YbTKeyZwLu22G6LvxBKAEEjck1b_G0OJuhEHgGXRJZwbb-um-g1nPABomqBhVjZjOUMg4WibVeYosdCoA6nkk90klWMfCX_83r7yqJv6f09sI1rwOPHUTWGcdSwJlH40DKRUZffuHcng2mwK53w38D4-rCBt4V05m2dLntxTklnUiHJj-a1xApTlzvhAI3vaXvcckutnSLkVt1V6yuajRFYbjTHQwxcI_eE822SKqOqOfmKkt29YmolrEaHopzWvMYJXs=w1280-h960-no)"
          }}
        />
        <div className="hero-content-area">
          <h1>Mogollon Interiors</h1>
          <h3>Need a remodel? You've come to the right place.</h3>
          <Link to="/contactUs" className="btn">
            {" "}
            <span className="fa fa-phone" /> Contact Us Now
          </Link>
        </div>
      </section>
      <section className="remodels">
        <h3 className="title">Some of our remodels:</h3>
        <p>
          Below are some of my most recent works. All have been done in the
          Flagstaff location. Some include a basic remodel of one room, others
          include remodelling the entire home. Click on the pictures below to
          see some before and after images.{" "}
        </p>
        <hr />

        <div className="grid">
          <img
            className="small"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/0mHEZJJ8SDUToE3-CP-Sr5sscREwPRHplOLPLv5CWaS5KDndvdYJADnZph2E_E4oDrVg9iNW841OglQv5LuU2eu2Y-_-N7wfjsw-ppOTeUurkP0nnP1YCX045AAdKd87KuLHnhXk2lPAh14tgypUTlNUDFzUEX3dFWWmtVhRYJ9gT9qUbPSYgE8jFoocgqvumCL3JKRh5B_s8t8QYnBO4uDoRguWuG9gYhMV5_PLK3qyYvTeJ-REBX_pqxh_EVM_FYNA9Kyg4XS6UPU8euaOBjY5nsE6Re523gjDl4RrKDV8WGVxKQR6SEZpr5pPz_pIJ8XXcrI6EeziaeFDNBAaok4s1qkAq5IcHPKgYUgF5_byXnFdWm977Lj37tIoZ_jb9FtkdUO9NHL7eoOiAoQiq8XpXRgErgvpVFxfPpP9-6LO1C3Nl1_akYR0E0XRvwQAnvLRFiqfQJc8BknyIf0bbaiBP4KuV4LXmAldb3iSWgHbcqibuvCy78jqKxefVW8HM8IefGQL5PRwpcQu0zaKP2PWPGQY1vX7LKsOFkBMSSJ-peRYxhtILl9BOohbf59OL1_f6x3bXOrBKBaegnjlANEidNO8TbaWiYOo34dOQs5Ha4dFpOYMHAAXdU4bBgs=w720-h960-no)"
            }}
            alt="background"
          />
          <img
            className="large"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/3KWPFPqvm5CwHnEXWH_63ETjU9OobLKS-hl4TyUWt0sNCewpKX8H_P73ZFseut_t0c_h1G_LHEgIcuIPU9lCq12gYOZiRVvdhAvqCGV7TKAbe1lkQHJJU7J5yN9MV9YjOhekpSs0Ju9_6Kj-8isaBmeq5ZyEjbidrxrhM_frJlzQgFBAV_6t4m99g9WxnGIBrsJCvJyPbEL5PbVkgsUrGJvqyotXI_ohjuzT__5M-6F0aPAFRiXqHk_FniDmAvhcnzadd8OdNO-ux3B1Dsr3XPc6XQbvS1mZ87M99Mj_p2RsBG93ENoM_PSV0TOW2ajl9RJM32aDpq0hpQdKLiSYOrVaL0A7hl82CtrOczz1xG-05TORxZX2aDesh1YbTKeyZwLu22G6LvxBKAEEjck1b_G0OJuhEHgGXRJZwbb-um-g1nPABomqBhVjZjOUMg4WibVeYosdCoA6nkk90klWMfCX_83r7yqJv6f09sI1rwOPHUTWGcdSwJlH40DKRUZffuHcng2mwK53w38D4-rCBt4V05m2dLntxTklnUiHJj-a1xApTlzvhAI3vaXvcckutnSLkVt1V6yuajRFYbjTHQwxcI_eE822SKqOqOfmKkt29YmolrEaHopzWvMYJXs=w1280-h960-no)"
            }}
          />
          <img
            className="large"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/qefTJUm5S38hHHx0SeB9FLR4wsU9VzyWSWYLzLFOmHz6g161xYP2iBC6RP_RvCous7xh4aRAQ4AwPUKG3-Tun9-IRshD0lVOA6NS4CeYD_K4vQzZ7TxEPQJbjBvw6dnoDSkmPs3x4aDob4ymewf8FK7SZKvY6nr6gdp8wPg503rMSl49MtTuKiV06CawbSCA0yKEptxS4YvhVWNDb4wYvabH1joYo9R-MsRehwe9vjfJZfcO5qLRBXeT-E6NfoNIuyfiXOFS9xV9sl9kQNmkcYSiJnRztSbmLKTpoPTBwYYwIWp4AISj8nOJyP_2SHVGcvrmq6q5d721XWSvId0ZEJZGBk0zTsHgH4W3kZfhHyUymBQZc35mzT9NSxjAKd5o1ssBiQDUnrOr4NQ3A_W4NyAxE1f9SZu-U3TChf9veMg1GCsDWnB-SPOZHMKScFjocrbQdNeUeUAS1z7ePjDXr6-Q7nXBR1j2nHrJuRvdpsXsHQFPgOxwirHBJVRtChwO5iB9Mb08uu3IB-_uiFaV6FXwXNhINoHg48UfngoNqdZFbrWH2bjqrSIPHfatScJLSbtzmsMqqz3Av1rD6KR6uSjoHbsSkGlpxYK8nVpzvqCcdVctkT0U9Sp3ox2NCbU=w720-h960-no)"
            }}
          />
          <img
            className="small"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/pyKnWXz6F7QNqZD6MmcHR0Gi06rzWuCWsWY-uuc-E0-VKT179OFCud_huK0muuJYMQOIv1BbXe5cucdp18ei-8FI2tuV6ByjNhFm1Z_cjM5DqCG4tdd4CVF9EsRqrTbs_1dUZmKgd2h4a74m1PSBOquSXkKaap14yHLQut3_8GbRGWyjmjGmgQ4Jxdz9FclxNJo7eEtohcX_SFjojzrjMEn6eARBm1MIc2OBHBk98qwoDNJmpBtfM3swX3MJOAL4kw9gYOcV5FxYG349KzEwGildkf1I-Ja7hXSTxB90ZnO8867QLnkgmCEnkT4vHBJCEz1ZsTMq_KkrpQ7Dk2cf19t7vtQlkTT2u8dGaDaulVMIFDrz9XT3vYgduDfos1D6RjBvzQSJo5l2QgBNMRnM43sAIGbtuvwglE-z5EKs2EKExVVoNlS0tHkS9c-a7Pi3wXVnK04hsULUHuIzZCpJKqvaFA6iCyoE132CdIo7A9Y22thGTqF_1NEiefFgNutyVkRgLaQSd4zZX23kENKb3ZAVZxMvxuGkyJ_DCAZjaJw04PHZ3dRkU3FcWikCcMD15_xSCZPEfbNkzIxP1LBvxGYz3c8sLTp3iFNohwapz5c76o_qKljFEiqqvi-iFcw=w1280-h960-no)"
            }}
          />
        </div>
        <Link to="projects" className="btn mb-5">
          See More
        </Link>
      </section>
      <section className="contact py-5">
        <h3 className="title">Learn More</h3>
        <p>
          Want to learn more about what we do, or have any questions? Feel free
          to contact me{" "}
          <a className="emailLink" href="mailto:adairscant@gmail.com">
            here.
          </a>{" "}
        </p>
      </section>
    </>
  );
};

export default Landing;
