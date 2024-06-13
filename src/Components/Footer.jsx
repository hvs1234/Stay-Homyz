// import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className="section section-footer" id="footer">
        <div className="container">
          <h3 className="f-main-heading">
            <span>S</span>tay <span>H</span>omyz&nbsp;{" "}
            <i className="fa-solid fa-handshake"></i>
          </h3>
          <div className="footer-content grid grid-four-columns">
            <div className="f-about">
              <h3>About</h3>
              <p>
                Stay Homyz: Your go-to real estate site for finding dream homes.
                Explore listings, get expert advice, and make informed property
                decisions.
              </p>
            </div>
            <div className="f-links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#residencies" className="footer-link">
                    Residencies
                  </a>
                </li>
                <li>
                  <a href="#value" className="footer-link">
                    Our Value
                  </a>
                </li>
                <li>
                  <a href="#getstarted" className="footer-link">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="f-privacy">
              <h3>Privacy</h3>
              <ul>
                <li>
                  <a className="footer-link" href="#footer">
                    Security
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#footer">
                    User Value
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#footer">
                    Limitations
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#footer">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="f-address">
              <h3>Have a questions ?</h3>
              <div className="address-part">
                <div className="f-address-part-data">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>Stay Homyz, 19 Rajpur Road , Dehradun Uttarakhand India</p>
                </div>
                <div className="f-address-part-data">
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+9149349278">+91 9149349278</a>
                </div>
                <div className="f-address-part-data">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:3469harshsharma@gmail.com">
                    3469harshsharma@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="f-credit">
            <p>Copyright <i className="fa-solid fa-copyright"></i> 2024 Stay Homyz || All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
