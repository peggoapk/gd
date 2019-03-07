import React from "react";
import MogollonNav from "./MogollonNav";

function AboutUs(props) {
  return (
    <>
      <MogollonNav />
      <section className="hero">
        <div
          className="background-image"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/3HA0Y72ioMmzo586E4uSmeSIYEHIZ9IHgjb3HfBnnBUCcr1Yhcc1m5xHxxjEumhg0iuxoWIhu92sJiLvJfkzxzJLsuf3zBgS_T_2hcDZyK-3KVhAVvLaPUSu6q3MMhaUAw4Cq71oWSAbHZh1na8-jIAT099EpZVeWfLkUa4Cy_McQzlysRYk39qvskUKoW-5KBw-Hk-Y5dBRf5fJ9tAGJZsJKKmHmf-26GkJzxw7siojgPiR96Jd4JMBfEm_WoUxIK9vxq-ycOAbx9oNwenrS8z1zzC-yUyA_mx5etDMMkG7ZGUEB4MynymAxSbtuvhEXRd7obd5bpMu_PU2uPcyxe8oDf0Xuh8KsnIxgPbKCOccgnYRthCLVlgSG2ggJE2uRtzme6kpyHqnLUxRbUeIugME4u6A_r-fDx9tJjTIoJ6S6pf5AHEnL4aruiMbMmkJDvyRFneSTxsyoGSdaELtSh2yPTFDqQrm_6WdQaGuQT7bbO2cnsVuArJnk3ziz7KucTDFxCsvMvjqqmU4O_N2WCu5hSrV7b9iNyzMzQ6AviqCwb_7MUcjQGKW5iXxJyS8_a_HIexAm5BGiMjAY8sNMKvHF7bUmljkFDaqKsVFQl9ujVCIs9JLaDVk_pzSQOw=w1230-h923-no)"
          }}
        />
        <div className="hero-content-area">
          <h1>About Us</h1>
          <h3>This is our story.</h3>
        </div>
      </section>

      <section>
        <h3>We are a mom and dad, born and raised in Flagstaff Arizona.</h3>
        <hr />
        <p>
          My name is Adi, I work full time as a teacher, a mom, a wife and have
          just begun a journey with my husband into the world of remodelling. I
          was born and raised in Flagstaff AZ. It is a beautiful place and I try
          to bring it's essence into the remodels that I design.
        </p>
      </section>
    </>
  );
}

export default AboutUs;
