import React from 'react'

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Logout Part

  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.clear();
      navigate("/login");
      window.location.reload();
    } else {
      return;
    }
  };

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className={`header ${isActive ? "active" : ""}`}>
        <div className="logo">
          <h2>
            <span>S</span>tay <span>H</span>omyz
          </h2>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a className="navlink" href="#residencies">
                Residencies
              </a>
            </li>
            <li>
              <a className="navlink" href="#value">
                Our Value
              </a>
            </li>
            <li>
              <a className="navlink" href="#getstarted">
                Get Started
              </a>
            </li>
            <li>
              <a className="navlink" href="#contact">
                Contact
              </a>
            </li>
            <li>
              {auth ? (
                <Link
                  className="navlink contact"
                  to={"/login"}
                  onClick={logout}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <li>
                    <Link className="navlink" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="navlink contact" to={"/signup"}>
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </li>
          </ul>
        </nav>
        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
          <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
        </div>
      </header>
    </>
  );
};

export default Navbar;
