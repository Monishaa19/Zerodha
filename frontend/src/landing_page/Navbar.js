import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            className="ml-5"
            style={{ width: "20%", position: "relative", left: "20%" }}
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginRight: "0px" }}
          >
           

            <li class="nav-item">
              <Link
                to="/about"
                class="nav-link"
                style={{ marginRight: "20px" }}
                href="#"
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/products"
                class="nav-link"
                style={{ marginRight: "20px" }}
                href="#"
              >
                Products
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/pricing"
                class="nav-link"
                style={{ marginRight: "20px" }}
                href="#"
              >
                Pricing
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/support"
                class="nav-link"
                style={{ marginRight: "20px" }}
                href="#"
              >
                Support
              </Link>
            </li>

            <li class="nav-item">
              <a
                class="nav-link btn btn-primary px-4 py-2 rounded shadow-lg text-black fw-bold"
                href="https://zerodha-dashboard-v6ja.onrender.com" style={{marginLeft:'2rem',fontColor:"black"}}
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
