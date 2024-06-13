import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Signup = () => {
  // Signup form validation

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [newpassword, setNewpassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/login");
    }
  }, []);

  // Collect Data

  const collectData = async () => {
    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      !newpassword ||
      !confirmpassword
    ) {
      alert("Please fill out all fields!");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter valid phone number. Phone Number length must be 10");
      return;
    } else if (phone.length > 10) {
      alert("Phone number length exceed 10");
      return;
    }

    if (newpassword.length < 8) {
      alert("Password length must be 8 characters.");
      return;
    }

    if (newpassword !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    let result = await fetch("http://localhost:4600/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        gender,
        newpassword,
        confirmpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/login");
    alert("You are signup successfully");
  };
  return (
    <>
      {/* Signup Section */}

      <section className="section section-signup">
        <div className="signup-overlay"></div>
        <header className="header signup-header">
          <div className="logo">
            <h2>
              <span>S</span>tay <span>H</span>omyz
            </h2>
          </div>
          <nav className="signup-navbar">
            <ul>
              <li>
                <Link className="navlink contact" to={"/login"}>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="signup-main-content grid grid-two-columns">
            <div className="signup-hero-data">
              <p>
                Explore unique and diverse property options tailored to meet
                your lifestyle needs
              </p>
              <h2>Receive personalized support and advice</h2>
              <h3>
                Enjoy peace of mind with safe and transparent buying, selling,
                and renting processes
              </h3>
              <h3>
                Discover homes in vibrant communities that offer a sense of
                belonging and growth.
              </h3>
            </div>
            <div className="signup-hero-form">
              <div className="form">
                <h2>
                  Create Your Account&nbsp; <i className="fa-solid fa-user"></i>
                </h2>
                <div className="line form-line"></div>
                <div>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    className="input-here"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    className="input-here"
                    placeholder="Your Valid Email Address"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="phone"
                    name="Phone"
                    id="phone"
                    className="input-here"
                    placeholder="Your Valid Phone Number"
                    required
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="gender"
                    name="Gender"
                    id="gender"
                    className="input-here"
                    placeholder="Your Gender"
                    required
                    autoComplete="off"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="New Password"
                    id="password1"
                    className="input-here"
                    placeholder="Create New Password"
                    required
                    autoComplete="off"
                    value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="Confirm New Password"
                    id="password2"
                    className="input-here"
                    placeholder="Confirm Password"
                    required
                    autoComplete="off"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn submit-btn"
                    onClick={collectData}
                  >
                    Signup Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Signup;
