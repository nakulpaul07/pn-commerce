import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Shop() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img src="/image/colorlogo.png" alt="" />
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-4">
            <h3>
              Customer Service <br /> &nbsp; +0123 456 789{" "}
            </h3>
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
      {/* 2nd Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary align-center">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 b">
              <li className="nav-item text-dark">
                <Link
                  className="nav-Link active ms-5 text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-Link  text-dark" to="/Shop">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-Link  text-dark" to="/ShopDetail">
                  Shop Detail
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-Link  text-dark" to="/Contact">
                  Contact
                </Link>
              </li>

              <div class="dropdown ms-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Sing In
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sing Out
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown ms-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      GBP
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CAD
                    </a>
                  </li>
                </ul>
              </div>

              {/*3rd drop down */}

              <div class="dropdown ms-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  UN
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      FR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      AR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      RU
                    </a>
                  </li>
                </ul>
              </div>

              <form class="d-flex ms-5 " role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar end */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <p className="bg-white" style={{ height: "30px" }}>
              {" "}
              &nbsp; &nbsp; &nbsp; Home &nbsp; / Shop &nbsp; / Shop List
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mt-4">
            <h3 style={{ color: "grey", fontWeight: "400" }}>
              Our Shop &nbsp; &nbsp; &nbsp;---------{" "}
            </h3>
          </div>

          <div className="col-md-4"></div>

          <div className="col-md-4 mt-4">
            <span className="dropdown" />
            <button
              className="btn btn-light text-dark dropdown-toggle"
              style={{ color: "black" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sorting
            </button>
            <ul class="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Latest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Popularity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Best rating
                </a>
              </li>
            </ul>
            &nbsp; &nbsp;
            <span className="dropdown" />
            <button
              className="btn btn-light text-dark dropdown-toggle"
              style={{ color: "black" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Showing
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  10
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  20
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Product start */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-1.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-4.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-7.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-4.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-4.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-5.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-6.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-7.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>
        </div>
      </div>
      {/* Product start */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-1.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-2.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-3.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-4.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-4.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-5.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-6.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-7.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>
        </div>
      </div>
      {/* Product start */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-1.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-2.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-3.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-1.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-4.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-6.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-5.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card1">
              <img src="image/product-2.jpg" className="w-100 h-100" alt="" />
              <h5 className="text-dark text-center">
                Product Name Goes Here <br /> $123.00
                <del style={{ color: "silver", fontWeight: "300" }}>
                  $123.00
                </del>{" "}
                <br />
              </h5>
              <center>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid  "></i>
                <i class="fa-solid fa-star-half-stroke fa-star"></i>
                <span className="text-dark">(99)</span>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Footer Start */}
      <footer style={{ backgroundColor: "#3d464d" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-4 mt-3">
              <h4 class="mt-5 text-light">GET IN TOUCH</h4>
              <p class="mt-3 mb-3 text-light">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor. Rebum tempor no vero est magna amet no
              </p>

              <div class="mt-2 mb-2">
                <i
                  class="fa-solid fa-location-dot"
                  style={{ color: "orange" }}
                ></i>
                <span class="text-light ms-2">123 Street, New York, USA</span>
              </div>

              <div class="mt-2 mb-2">
                <i class="fa-solid fa-envelope" style={{ color: "orange" }}></i>
                <span class="text-light ms-2  ">info@example.com</span>
              </div>

              <div class="mt-2 mb-5">
                <i class="fa-solid fa-phone" style={{ color: "orange" }}></i>
                <span class="text-light ms-2  ">+012 345 67890</span>
              </div>
            </div>

            <div class="col-md-2 mt-3">
              <ul class="text-light" style={{ lineheight: "0.9cm" }}>
                <h5 class="mt-5 text-light mb-3"> QUICK SHOP</h5>
                <li>Home</li>
                <li>Our Shop</li>
                <li>Shop Detail</li>
                <li>Shopping Cart</li>
                <li>Checkout</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div class="col-md-2 mt-3">
              <ul class="text-light" style={{ lineheight: "0.9cm" }}>
                <h5 class="mt-5 text-light mb-3">MY ACCOUNT</h5>
                <li>Home</li>
                <li>Our Shop</li>
                <li>Shop Detail</li>
                <li>Shopping Cart</li>
                <li>Checkout</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div class="col-md-1"></div>

            <div class="col-md-3 mt-3">
              <h5 class="mt-5 text-light mb-3">NEWSLETTER</h5>
              <p class="text-light">
                Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p>
              <input type="text" placeholder="Your Email Add:" />
              <h5 class="mt-5 text-light mb-3">FOLLOW US</h5>
              <Link href="#">
                <i
                  class="fa-brands fa-facebook"
                  style={{ color: "orange", fontSize: "40px" }}
                ></i>
              </Link>
              <Link href="#">
                <i
                  class="fa-brands fa-instagram"
                  style={{
                    color: "orange",
                    fontSize: "40px",
                    marginLeft: "3px",
                  }}
                ></i>
              </Link>
              <Link href="#">
                <i
                  class="fa-brands fa-whatsapp"
                  style={{
                    color: "orange",
                    fontSize: "40px",
                    marginLeft: "3px",
                  }}
                ></i>
              </Link>
            </div>

            <hr className="text-light" />

            <h6>
              <b style={{ fontsize: "larger" }}>©</b>{" "}
              <span style={{ color: "orange" }}> PN INFOSYS. PNINFOSYS </span>
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Shop;
