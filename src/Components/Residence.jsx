// import React from 'react'
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../index.css";

const Residence = ({ residencedata }) => {
  return (
    <>
      <section className="section section-residence" id="residencies">
        <div className="container">
          <h3 className="residence-top-para">Best Choices</h3>
          <h2 className="residence-heading">Popular Residencies&nbsp; <i className="fa-solid fa-eye"></i></h2>
          <div className="line"></div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              1300: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 3,
              },
              620: {
                slidesPerView: 2,
              }
            }}
          >
            <div className="residence-boxes grid grid-four-columns">
              {residencedata.map((curele, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="residence-box" key={curele.id}>
                      <img src={curele.img} alt="img" />
                      <p className="price">
                        <i className={curele.icon}></i>&nbsp;{curele.price}
                      </p>
                      <h3>{curele.title}</h3>
                      <p>{curele.address}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

Residence.propTypes = {
  residencedata: PropTypes.array.isRequired,
};

export default Residence;
