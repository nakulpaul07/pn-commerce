import React from "react";
import { Link } from "react-router-dom";

function ShopDetail() {
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
              FILTER BY PRICE &nbsp; &nbsp; &nbsp;---------{" "}
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
      {/* Theme */}
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card" style={{ border: "1px solid white" }}>
              <img src="/image/product-2.jpg" alt="" />
            </div>
          </div>

          <div className="col-md-7">
            <div
              className="card5"
              style={{ border: "1px solid white", backgroundColor: "white" }}
            >
              <h2 className="ms-4">Product Name Goes Here</h2>
              <h5 className="ms-4 mt-4" style={{ fontSize: "0.35cm" }}>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i className="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i
                  className="fa-solid fa-star-half-stroke"
                  style={{ color: "orange" }}
                ></i>
                <span className="text-dark" />
                (99 Reviews)
              </h5>

              <h1 className="ms-3 mb-3">$150.00</h1>

              <p className="mt-2 ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates soluta commodi vero eum facere. Assumenda
                necessitatibus, error velit incidunt reprehenderit ut
                consequuntur, sint vero quos quas consectetur doloribus, qui
                cupiditate?
              </p>
              <center>
                <b className="ms-2">SIZES:</b>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    XS
                  </label>
                </span>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    S
                  </label>
                </span>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    L
                  </label>
                </span>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    XL
                  </label>
                </span>
              </center>

              <br />

              <center className="radio">
                <b className="ms-2">Color:</b>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    Black
                  </label>
                </span>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    White
                  </label>
                </span>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    Blue
                  </label>
                </span>

                <span class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input ms-2"
                    id="size-1"
                    name="size"
                  />
                  <label class="custom-control-label" for="size-1">
                    Green
                  </label>
                </span>
              </center>
              <br />
              <center>
                <button className="btn btn-dark mb-4">Add To Cart</button>
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Description-tab-pane"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Information-tab-pane"
                    aria-selected="false"
                  >
                    Information
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Reviews(0)
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Description-tab"
                  tabindex="0"
                >
                  <h4 className="mt-5 mb-3 ms-3">Product Description</h4>
                  <p className="mt-3 mb-5 ms-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nisi quam accusamus consequatur doloribus nihil unde
                    doloremque assumenda saepe, ea, quisquam laudantium soluta
                    earum placeat aliquid at provident excepturi aperiam? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    fuga illo voluptatem similique repudiandae necessitatibus
                    rem excepturi laudantium dolores, ut vitae quaerat
                    distinctio deserunt dolor id. Ullam molestias dicta quaerat?
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Information-tab"
                  tabindex="0"
                >
                  <h4 className="mt-5 mb-3 ms-3">Additional Information</h4>
                  <p className="mt-3 mb-5 ms-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nisi quam accusamus consequatur doloribus nihil unde
                    doloremque assumenda saepe, ea, quisquam laudantium soluta
                    earum placeat aliquid at provident excepturi aperiam? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    fuga illo voluptatem similique repudiandae necessitatibus
                    rem excepturi laudantium dolores, ut vitae quaerat
                    distinctio deserunt dolor id. Ullam molestias dicta quaerat?
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="mt-5 mb-5 mt-3">
                          1 review for "Product Name"
                        </h4>
                        <img
                          src="image/user.jpg"
                          class="ms-3 mt-2 mb-3"
                          alt=""
                        />
                        <span>jhon adision</span>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Necessitatibus porro quaerat vero animi itaque
                          nihil tenetur, dolorem iure, quo eius voluptas sunt
                          quisquam iste ab. Consequuntur veritatis nostrum
                          praesentium enim.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h4>Leave a review</h4>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <p>
                          Your Rating * :
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "orange" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "orange" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "orange" }}
                          ></i>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "orange" }}
                          ></i>
                        </p>
                        <h5 className="mb-5 mt-3 ms-2">YOUR NAME:</h5>
                        <input type="text" placeholder=" Enter Your Name" />
                        <h5 clasclassNames="mb-5 mt-3 ms-2">Email:</h5>
                        <input type="text" placeholder="Enter Your Email" />

                        <h5 className="mt-3 mb-3 ">
                          <button type="button" class="btn btn-warning btn-lg">
                            {" "}
                            Leave Your Review
                          </button>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/*  FEATURED PRODUCTS  */}
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-7 Quality">
            FEATURED PRODUCTS <i class="fa-solid fa-fan"></i>{" "}
            --------------------
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <br />
      <br />
      {/* Product start */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ border: "1px solid white" }}>
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
            <div className="card" style={{ border: "1px solid white" }}>
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
            <div className="card" style={{ border: "1px solid white" }}>
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
            <div className="card" style={{ border: "1px solid white" }}>
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
      {/* Footer Start */}
      <footer style={{ backgroundColor: "#3d464d" }} className="mt-4">
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

export default ShopDetail;
