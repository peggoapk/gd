import React from "react";

export const AboutUs = () => {
  return (
    <>
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
        {/* <h3>We are a mom and dad, born and raised in Flagstaff Arizona.</h3> */}
        <hr />
        <p>
          Mogollon design was started with the passion and love for the creation
          of new spaces. Owner Adair Scantlebury started her business in 2015
          when she and her husband purchased a hundred year old home in downtown
          Flagstaff, AZ. She fell in love with the design process and creativity
          that ensued when remodeling the fixer upper home. Adair takes pride in
          listening to the client and turning their ideas and style into their
          dream space. Focussing on restoring the natural beauty of the home,
          Adair enjoys using neutrals with pops of color and unique textiles to
          enhance the space. At Mogollon design the goal is to create a
          functional, unique and beautiful home that the clients will continue
          to enjoy.
        </p>
      </section>
    </>
  );
};

export default AboutUs;
