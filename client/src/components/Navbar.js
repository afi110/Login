import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import icon from "../images/icon.png";
import { UserContext } from "../App";
const Navbar = () => {
  const { state } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li class="nav-item active">
            <NavLink className="nav-link" to="/">
              Home{" "}
            </NavLink>
          </li>

          <li class="nav-item ">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link " to="/contact">
              Contact
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link " to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li class="nav-item active">
            <NavLink className="nav-link" to="/">
              Home{" "}
            </NavLink>
          </li>

          <li class="nav-item ">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link " to="/contact">
              Contact
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link " to="/login">
              Login
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link " to="/signup">
              Registration
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="#">
            <img src={icon} alt="icon miss" />
          </NavLink>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <RenderMenu />
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
