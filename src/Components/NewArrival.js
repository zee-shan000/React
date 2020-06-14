import React from "react";
import "./NewArrival.css";
import "./Header.css";
import "./Footer.css";
import S1 from "../images/pk.png";
import S2 from "../images/bag.png";
import { Link } from "react-router-dom";
import P from "../images/NewArrival/bacha1.jpg";
import P1 from "../images/NewArrival/kidd.jpg";
import P2 from "../images/NewArrival/childw.jpg";
import P4 from "../images/NewArrival/kurtii.jpg";
import P5 from "../images/NewArrival/curtii.jpg";
import P6 from "../images/NewArrival/ki.jpg";
import P7 from "../images/NewArrival/ls.jpg";
import P8 from "../images/NewArrival/er.png";
import P9 from "../images/NewArrival/swe.jpg";
import P10 from "../images/NewArrival/suit.jpg";
import P11 from "../images/NewArrival/coat.png";
import lg from "../images/logo.png";
class NewArrival extends React.Component {
  render() {
    return (
      <div className="back">
        <div className="main">
          <div className="fix">
            <Link to="Home">
              <center>
                {" "}
                <img src={lg} alt="Panda" className="Hell"></img>
              </center>
            </Link>
          </div>
          <ul>
            <li>
              <Link to="SignIn">
                {" "}
                <a href="www.google.com" className="move">
                  Sign in{" "}
                </a>
              </Link>
            </li>{" "}
            &ensp;
            <li>
              <img src={S1} alt="Not Found" className="pk"></img>
            </li>
            &emsp;
            <li>
              <select className="option">
                <option selected>PKR</option>
                <option>AUD</option>
                <option>GBP</option>
                <option>CAD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>JPY</option>
                <option>SAR</option>
                <option>SEK</option>
                <option>CHF</option>
                <option>USD</option>
                <option>AED</option>
              </select>
            </li>
            <li>
              <input
                className="align"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
            <li>
              <Link to="Bag">
                <img src={S2} alt="Not Found" className="bag"></img>
              </Link>
            </li>
          </ul>
        </div>
        <center>
          <div>
            <p className="z">Panda</p>
            <div class="dropdown">
              <Link to="NewArrival">
                <button class="dropbtn">NEW ARRIVALS</button>
              </Link>
              &emsp;
              <div class="dropdown-content">
                <br></br>
                <h5>CLOTHES COLLECTION</h5>
                <hr className="new"></hr>
                <a href="g" className="length">
                  UNSTITCHED COLLECTION
                </a>
                <a href="r" className="length">
                  STITCHED COLLECTION
                </a>
                <a href="t" className="length">
                  KURTI COLLECTION
                </a>
                <hr></hr>
                <h5>WINTER COLLECTION</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  SHAWL
                </a>
                <a href="t" className="length">
                  FOOTWEAR
                </a>
                <a href="t" className="length">
                  WAIST COATS
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Link to="Women">
                <button class="dropbtn">WOMEN</button>
              </Link>
              &emsp;
              <div class="dropdown-content">
                <br></br>
                <h5>WINTER COLLECTION</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  SHAWL
                </a>
                <a href="t" className="length">
                  INNER
                </a>
                <a href="t" className="length">
                  LONG COATS
                </a>
                <hr></hr>
                <h5>ACCESSORIES</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  TROUSERS
                </a>
                <a href="t" className="length">
                  BAG
                </a>
                <a href="t" className="length">
                  JWELERY
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Link to="Men">
                <button class="dropbtn">MEN</button>
              </Link>
              &emsp;
              <div class="dropdown-content">
                <br></br>
                <h5>WINTER COLLECTION</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  WAIST COATS
                </a>
                <a href="t" className="length">
                  BOTTOM
                </a>
                <a href="t" className="length">
                  FOOT WEAR
                </a>
                <hr></hr>
                <h5>OTHERS</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  TROUSERS
                </a>
                <a href="t" className="length">
                  CAP
                </a>
                <a href="t" className="length">
                  BEARED OIL
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Link to="BoysGirls">
                <button class="dropbtn">BOYS & GIRLS</button>
              </Link>
              &emsp;
              <div class="dropdown-content">
                <br></br>
                <h5>WINTER COLLECTION</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  KIDS SHAWL
                </a>
                <a href="t" className="length">
                  KIDS WAIST COATS
                </a>
                <a href="t" className="length">
                  KIDS KURTA
                </a>
                <a href="t" className="length">
                  TEEN KURTI
                </a>
                <hr></hr>
                <h5>WARMING</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  KIDS TROUSERS
                </a>
                <a href="t" className="length">
                  TEEN SPECIALS
                </a>
                <a href="t" className="length">
                  KIDS JWELERY & CAPS
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Link to="Fragrances">
                <button class="dropbtn">FRAGRANCES</button>
              </Link>
              &emsp;
              <div class="dropdown-content">
                <br></br>
                <h5>FOR MEN</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  PERFUME
                </a>
                <a href="t" className="length">
                  ATTAR
                </a>
                <a href="t" className="length">
                  BODY SPRAY
                </a>
                <hr></hr>
                <h5>FOR WOMEN</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  PERFUME
                </a>
                <a href="t" className="length">
                  GIFT SET
                </a>
                <a href="t" className="length">
                  BODY SPRAY
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Link to="Makeup">
                <button class="dropbtn">MAKEUP</button>
              </Link>
              &emsp;
              <div class="dropdown-content">
                <br></br>
                <h5>FACE</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  BLUSHER
                </a>
                <a href="t" className="length">
                  OTHERS
                </a>
                <hr></hr>
                <h5>LIPS</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  LIPSTICK
                </a>
                <a href="t" className="length">
                  LIPGLOSS
                </a>
                <h5>EYES</h5>
                <hr className="new"></hr>
                <a href="t" className="length">
                  EYE LINER
                </a>
                <a href="t" className="length">
                  EYE SHADOW
                </a>
                <a href="t" className="length">
                  EYE PENCIL
                </a>
              </div>
            </div>
            <div class="dropdown">
              <Link to="Catalogue">
                <button class="dropbtn">CATALOGS</button>
              </Link>
              &emsp;
              <div class="dropdown-content"></div>
            </div>
          </div>
        </center>
        <br></br>
        <div>
          <div class="container">
            <div class="row">
              <div class="col-sm-md-lg-4">
                <h5>
                  <b>SHOPPING OPTIONS</b>
                </h5>
                <hr className="new"></hr>
                <select className="select">
                  <option disabled selected>
                    CATEGORY
                  </option>
                  <option>Women - Winter Collection '19</option>
                  <option>Men - Winter Collection '19</option>
                  <option>Boys - Winter Collection '19</option>
                  <option>Girls - Winter Collection '19</option>
                </select>
                <br></br>
                <hr></hr>
                <select className="select">
                  <option disabled selected>
                    DESIGN
                  </option>
                  <option>Net Dupatta</option>
                  <option>Handwoven</option>
                  <option>Cambric Shirt</option>
                  <option>Basic Jacquard Shirt With Jacquard Dupatta</option>
                  <option>Basic Linen Shirt With Linen Dupatta</option>
                  <option>
                    Embroidered Cambric Shirt with Impure Chiffon Dupatta
                  </option>
                  <option>
                    Velvet Applique Cambric Shirt With Indian Dupatta
                  </option>
                  <option>Basic Cambric Printed Shirt</option>
                </select>
                <br></br>
                <hr></hr>
                <select className="select">
                  <option disabled selected>
                    PRODUCT CATEGORY
                  </option>
                  <option>Ladies Pret</option>
                  <option>Ladies Kurti</option>
                  <option>Girls Kurti</option>
                  <option>Men Kurta</option>
                  <option>Shalwar Kameez</option>
                  <option>Peshawari Chappal</option>
                  <option>Waist Coat</option>
                  <option>Sweaters</option>
                </select>
                <br></br>
                <hr></hr>
                <select className="select">
                  <option disabled selected>
                    PIECES
                  </option>
                  <option>1 Piece</option>
                  <option>2 Piece</option>
                  <option>3 Piece</option>
                </select>
                <br></br>
                <hr></hr>
                <select className="select">
                  <option disabled selected>
                    SIZE
                  </option>
                  <option>X Small</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>X Large</option>
                </select>
                <br></br>
                <hr></hr>
                <select className="select">
                  <option disabled selected>
                    PRICE
                  </option>
                  <option>PKR0.00 - PKR5,000.00</option>
                  <option>PKR5,000.00 and above</option>
                </select>
                <br></br>
                <br></br>
                <br></br>
                <h5>
                  <b>MY WISH LIST</b>
                </h5>
                <hr className="new"></hr>
                <p>
                  <small>You have no items in your wish list.</small>
                </p>
              </div>
              <div class="col-sm-md-lg-8">
                <div>
                  <section
                    class="bannerbottom py-lg-5 py-md-4 py-md-3 py-2"
                    className="colll"
                  >
                    <div className="bannerbottom py-lg-5 py-md-4 py-md-3 py-2">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4 col-sm-12 w3_ban1">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P}
                                alt="Card image"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Kurta</h5>
                                <a href="a" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban1">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P1}
                                alt="Card9 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Kurti</h5>
                                <a href="b" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban1">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P2}
                                alt="Card8 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Coat Pent</h5>
                                <a href="c" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                            <br></br>
                            <br></br>
                          </div>

                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P4}
                                alt="Card7 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Suit</h5>
                                <a href="d" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P5}
                                alt="Card6 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">3 Piece</h5>
                                <a href="e" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P6}
                                alt="Card5 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Frock</h5>
                                <a href="f" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                            <br></br>
                            <br></br>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P7}
                                alt="Card4 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Ladies Sweater</h5>
                                <a href="g" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P8}
                                alt="Card3 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Sweater</h5>
                                <a href="h" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P9}
                                alt="Card2 image cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Short Hot</h5>
                                <a href="i" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                            <br></br>
                            <br></br>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P10}
                                alt="Card1"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Decorative</h5>
                                <a href="h" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12 w3_ban">
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={P11}
                                alt="Card"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Waist Coat</h5>
                                <a href="k" className="btn btn-primary">
                                  Order Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <br></br>
                  <br></br>
                  <br></br>
                  <ul className="pager">
                    <li>
                      <a href="nex" className="bold">
                        Next Page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <center>
              <div className="be">
                <h1 className="be2">BE THE FIRST</h1>
                <p>
                  New arrivals. Exclusive previews. First access to{" "}
                  <p>
                    sales. Sign up to stay in the know.Sign up to stay in the
                    know.
                  </p>
                </p>
                <input
                  type="email"
                  name="emailaddress"
                  placeholder="Enter your email address"
                  className="inputtype"
                ></input>
                <Link to="SignIn">
                  <button type="button" class="btn btn-dark border border-dark">
                    SIGN UP
                  </button>
                </Link>
                <br></br>
              </div>
            </center>
            <br></br>
            <br></br>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-md-lg-3" className="move">
                <h2>Need Help?</h2>
                <br></br>
                <p>
                  +92 21 111 112 111 (9am - 10pm , Mon - Sat)
                  <br></br>
                  +92 21 3878 1662 (9am - 10pm , Mon - Sat)
                </p>
                <br></br>
                <p>eshop@zeeshansiddique.com</p>
              </div>
              <div class="col-sm-md-lg-3" className="move">
                <h2>CUSTOMER SERVICE</h2>
                <br></br>
                <a href="Order" className="black">
                  Track Your Order
                </a>
                <br></br>
                <Link to="/Contact" className="black">
                  Contact Us
                </Link>
                <br></br>
                <a href="Delivery" className="black">
                  Delivery & Order
                </a>
                <br></br>
                <a href="Return" className="black">
                  Return & Exchanges
                </a>
                <br></br>
                <a href="Terms" className="black">
                  Terms & Conditions
                </a>
                <br></br>
                <a href="Privacy" className="black">
                  Privacy Policy
                </a>
                <br></br>
                <br></br>
                <br></br>
              </div>
              <div class="col-sm-md-lg-3" className="move">
                <h2>COMPANY</h2>
                <br></br>
                <a href="About" className="black">
                  About Us
                </a>
                <br></br>
                <a href="Storw" className="black">
                  Store Locations
                </a>
                <br></br>
                <a href="Career" className="black">
                  Careers
                </a>
                <br></br>
              </div>
              <div class="col-sm-md-lg-3" className="move">
                <h2>FOLLOW US</h2>
                <br></br>
                <br></br>
                <a href="www.facebook.com" class="fa fa-facebook">
                  {" "}
                </a>
                &emsp; &emsp;{" "}
                <a href="www.twitter.com" class="fa fa-twitter">
                  {" "}
                </a>
                &emsp; &emsp;{" "}
                <a href="www.youtube.com" class="fa fa-youtube">
                  {" "}
                </a>
                &emsp; &emsp;{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewArrival;
