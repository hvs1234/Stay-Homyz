import React from "react";
import Navbar from "./Components/Navbar";
import hero_img from "./assets/hero-img2.webp";
import Logopart from "./Components/Logopart";
import LogoData from "./APIs/LogopartAPI";
import Residence from "./Components/Residence";
import residenceData from "./APIs/ResidenceAPI";
import Value from "./Components/Value";
import Contact from "./Components/Contact";
import contactData from "./APIs/ContactAPI";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";

const Home = () => {
  // ---------------------------API Data----------------------------------- //

  // Logo Data API

  const [logopart] = React.useState(LogoData);

  // Residecnce Data API

  const [residencedata] = React.useState(residenceData);

  // Contact Data API

  const [contactdata] = React.useState(contactData);

  // Increment Counter

  React.useEffect(() => {
    const workdata = document.querySelector(".hero-counters");

    const workObserverCallback = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const countNum = document.querySelectorAll(".counter-numbers");
      const speed = 200;
      countNum.forEach((curEle) => {
        const updateNum = () => {
          const target = parseInt(curEle.dataset.number);
          const initial = parseInt(curEle.innerText);
          const increment = Math.trunc(target / speed);
          if (initial < target) {
            curEle.innerText = `${initial + increment}+`;
            setTimeout(updateNum, 5);
          } else {
            curEle.innerHTML = `${target} <i class="fa-solid fa-plus"></i>`;
          }
        };
        updateNum();
      });
    };

    const options = {
      root: null,
      threshold: 0,
    };

    const workObserve = new IntersectionObserver(workObserverCallback, options);
    workObserve.observe(workdata);

    return () => {
      workObserve.disconnect();
    };
  }, []);

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}

      <section className="section section-hero">
        <div className="overlay"></div>
        <Navbar />
        <div className="container">
          <div className="hero-content grid grid-two-columns">
            <div className="hero-data">
              <h1 className="hero-heading">Discover Most Suitable Property</h1>
              <p className="hero-para">
                Find a variety of properties that suit you very easily. Forget
                all difficulties in finding a residence for you.
              </p>
              <div className="hero-search">
                <i className="fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Dehradun Uttarakhand, India"
                />
                <button className="btn hero-search-btn">Search</button>
              </div>
              <div className="hero-counters grid grid-three-columns">
                <div>
                  <h2 className="counter-numbers" data-number="6872">
                    0 <i className="fa-solid fa-plus"></i>
                  </h2>
                  <p className="work-para">Premium Product</p>
                </div>

                <div>
                  <h2 className="counter-numbers" data-number="1988">
                    0 <i className="fa-solid fa-plus"></i>
                  </h2>
                  <p className="work-para">Happy Customer</p>
                </div>
                <div>
                  <h2 className="counter-numbers" data-number="1200">
                    0 <i className="fa-solid fa-plus"></i>
                  </h2>
                  <p className="work-para">Service Stars</p>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <img src={hero_img} alt="img" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}

      <Logopart logopart={logopart} />

      {/* Residence Section */}

      <Residence residencedata={residencedata} />

      {/* Value Section */}

      <Value />

      {/* Get Started Section */}

      <GetStarted />

      {/* Contact Section */}

      <Contact contactdata={contactdata} />

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Home;
