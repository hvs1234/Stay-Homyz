import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  // Login Form Validation

  const [email, setEmail] = React.useState('');
  const [newpassword, setPassword] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const loginData = async () => {
    if (!email || !newpassword) {
      alert("Please enter email or password");
      return;
    }
    let result = await fetch("http://localhost:4600/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        newpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <>
      {/* Login Section */}

      <section className="section section-login">
        <div className="login-overlay"></div>
        <header className="header login-header">
          <div className="logo">
            <h2>Stay Homyz</h2>
          </div>
          <nav className="login-navbar">
            <ul>
              <li>
                <Link className="navlink contact" to={"/signup"}>
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="login-content grid grid-two-columns">
            <div className="login-data">
              <p>
                {" "}
                Conveys a sense of warmth and comfort, appealing to potential
                buyers looking for a homely feel.
              </p>
              <h2>
                Suggests a safe, welcoming space, ideal for marketing family
                homes or peaceful retreats.
              </h2>
            </div>
            <div className="login-form-part">
              <div className="form">
                <h2>
                  User Login&nbsp; <i className="fa-solid fa-user-tie"></i>
                </h2>
                <div className="line form-line"></div>
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
                    type="password"
                    name="Password"
                    id="password"
                    className="input-here"
                    placeholder="Your Password"
                    required
                    autoComplete="off"
                    value={newpassword}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn submit-btn"
                    onClick={loginData}
                  >
                    Login Here
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

export default Login;
