// import React from 'react'
import PropTypes from "prop-types";

const Logopart = ({ logopart }) => {
  return (
    <>
      <section className="section section-logo">
        <div className="container">
          <div className="logo-part grid grid-four-columns">
            {logopart.map((curele) => {
              return (
                <div className="logo-data" key={curele.id}>
                  <i className={curele.icon}></i>
                  <h2>{curele.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Logopart.propTypes = {
  logopart: PropTypes.array.isRequired,
};

export default Logopart;
