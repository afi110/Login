import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import signpic from "../images/pic1.png";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("INVALID CREDINTIAL");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("LOGIN SUCCESSFULLY");
      navigate("/");
    }
  };

  return (
    <div>
      <>
        <section className="vh-100" style={{ backgroundColor: `#eee` }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-12">
                <div className="card text-black" style={{ borderradius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>

                        <form method="POST" className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder=" Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />

                              <i className="zmdi zmdi-email"></i>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i className="zmdi zmdi-lock"></i>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            {/* <button type="button" className="btn btn-primary btn-lg">Login</button> */}
                            <input
                              type="submit"
                              name="login"
                              id="login"
                              className="form-submit"
                              value="Login"
                              onClick={loginUser}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                        <div>
                          <img
                            src={signpic}
                            className="img-fluid"
                            alt="Sample "
                          />

                          <NavLink
                            to="/signup"
                            style={({ isActive }) => ({
                              color: isActive ? "#fff" : "#545e6f",
                              background: isActive ? "#7600dc" : "#f0f0f0",
                              margin: 110,
                            })}
                          >
                            {" "}
                            Register
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Login;
