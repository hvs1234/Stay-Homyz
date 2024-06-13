// import React from 'react'
import PropTypes from "prop-types";
import contact_img from "/public/Images/Residence/img5.webp";

const Contact = ({ contactdata }) => {
  return (
    <>
      {/* Contact Section */}

      <section className="section section-contact" id="contact">
        <div className="container">
          <div className="contact-main grid grid-two-columns">
            <div className="contact-main-data">
              <h3 className="contact-top-para">Our Contact Us</h3>
              <h2 className="contact-heading">
                Get Touch With Us&nbsp; <i className="fa-solid fa-phone"></i>
              </h2>
              <p className="contact-para">
                We always ready to help by providing the best services for you.
                We belive a good blace to live can make your life better.
              </p>
              <div className="contact-boxes grid grid-two-columns">
                {contactdata.map((curele) => {
                  return (
                    <div className="contact-box" key={curele.id}>
                      <div className="contact-content">
                        <i className={curele.icon}></i>
                        <div className="contact-data">
                          <h3>{curele.title}</h3>
                          <p>{curele.para}</p>
                        </div>
                      </div>
                      <div className="contact-btn">
                        <a
                          href={curele.link}
                          target="_blank"
                          className="btn call-btn"
                        >
                          {curele.callbtn}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="contact-img">
              <img src={contact_img} alt="contact_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Contact.propTypes = {
  contactdata: PropTypes.array.isRequired,
};

export default Contact;
