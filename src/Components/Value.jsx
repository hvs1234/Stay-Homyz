// import React from "react";
import value_img from "../assets/value-img.webp";

const Value = () => {
  return (
    <>
      {/* Value Section */}

      <section className="section section-value" id="value">
        <div className="container">
          <div className="value-content grid grid-two-columns">
            <div className="value-img">
              <img src={value_img} alt="img" />
            </div>
            <div className="value-data">
              <h3 className="value-top-para">Our Value</h3>
              <h2 className="value-heading">
                Value We Give To You&nbsp;{" "}
                <i className="fa-brands fa-slack"></i>
              </h2>
              <p className="value-para">
                We always ready to help by providing the best services for you.
                We belive a good blace to live can make your life better.
              </p>
              <p className="value-para">
                The best interest rates in the real estate market offer
                significant savings, enabling affordable property investments
                and increased homeownership opportunities.
              </p>
              <div className="value-boxes">
                <div className="value-box">
                  <div>
                    <i className="fa-solid fa-shield-cat"></i>
                  </div>
                  <h3>Best interest rates on the market</h3>
                  <div className="show-para">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>
                <div className="value-box">
                  <div>
                    <i className="fa-solid fa-shield-cat"></i>
                  </div>
                  <h3>Prevent unstable prices</h3>
                  <div className="show-para">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>
                <div className="value-box">
                  <div>
                    <i className="fa-solid fa-shield-cat"></i>
                  </div>
                  <h3>Best price on the market</h3>
                  <div className="show-para">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
