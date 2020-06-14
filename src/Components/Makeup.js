import React from "react";
import "./Makeup.css";
import "./Header.css";
import "./Footer.css";
import S1 from "../images/pk.png";
import S2 from "../images/bag.png";
import { Link } from "react-router-dom";
import P from "../images/NoMakeup/eye1.jpg";
import P1 from "../images/NoMakeup/ewe.jpg";
import P2 from "../images/NoMakeup/lip.jpg";
import P3 from "../images/NoMakeup/lipp.Jpeg";
import P4 from "../images/NoMakeup/makeup.jpg";
import P5 from "../images/NoMakeup/blushing.jpg";
import P6 from "../images/NoMakeup/make.jpg";
import lg from "../images/logo.png";
class Makeup extends React.Component {
  render() {
    return (
      <div className="back">
        <div className="main">
          <div className="fix">
            <Link to="Home">
              <center>  <img src={lg} alt="Panda" className="Hell"></img></center>
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
                <Link to="NewArrival" className="length">
                  UNSTITCHED COLLECTION
                </Link>
                <Link to="NewArrival" className="length">
                  STITCHED COLLECTION
                </Link>
                <Link to="NewArrival" className="length">
                  KURTI COLLECTION
                </Link>
                <hr></hr>
                <h5>WINTER COLLECTION</h5>
                <hr className="new"></hr>
                <Link to="NewArrival" className="length">
                  SHAWL
                </Link>
                <Link to="NewArrival" className="length">
                  FOOTWEAR
                </Link>
                <Link to="NewArrival" className="length">
                  WAIST COATS
                </Link>
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
                <Link to="Women" className="length">
                  SHAWL
                </Link>
                <Link to="Women" className="length">
                  INNER
                </Link>
                <Link to="Women" className="length">
                  LONG COATS
                </Link>
                <hr></hr>
                <h5>ACCESSORIES</h5>
                <hr className="new"></hr>
                <Link to="Women" className="length">
                  TROUSERS
                </Link>
                <Link to="Women" className="length">
                  BAG
                </Link>
                <Link to="Women" className="length">
                  JWELERY
                </Link>
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
                <Link to="Men" className="length">
                  WAIST COATS
                </Link>
                <Link to="Men" className="length">
                  BOTTOM
                </Link>
                <Link to="Men" className="length">
                  FOOT WEAR
                </Link>
                <hr></hr>
                <h5>OTHERS</h5>
                <hr className="new"></hr>
                <Link to="Men" className="length">
                  TROUSERS
                </Link>
                <Link to="Men" className="length">
                  CAP
                </Link>
                <Link to="Men" className="length">
                  BEARED OIL
                </Link>
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
                <Link to="BoysGirls" className="length">
                  KIDS SHAWL
                </Link>
                <Link to="BoysGirls" className="length">
                  KIDS WAIST COATS
                </Link>
                <Link to="BoysGirls" className="length">
                  KIDS KURTA
                </Link>
                <Link to="BoysGirls" className="length">
                  TEEN KURTI
                </Link>
                <hr></hr>
                <h5>WARMING</h5>
                <hr className="new"></hr>
                <Link to="BoysGirls" className="length">
                  KIDS TROUSERS
                </Link>
                <Link to="BoysGirls" className="length">
                  TEEN SPECIALS
                </Link>
                <Link to="BoysGirls" className="length">
                  KIDS JWELERY & CAPS
                </Link>
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
                <Link to="Fragrances" className="length">
                  PERFUME
                </Link>
                <Link to="Fragrances" className="length">
                  ATTAR
                </Link>
                <Link to="Fragrances" className="length">
                  BODY SPRAY
                </Link>
                <hr></hr>
                <h5>FOR WOMEN</h5>
                <hr className="new"></hr>
                <Link to="Fragrances" className="length">
                  PERFUME
                </Link>
                <Link to="Fragrances" className="length">
                  GIFT SET
                </Link>
                <Link to="Fragrances" className="length">
                  BODY SPRAY
                </Link>
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
                <Link to="Makeup" className="length">
                  BLUSHER
                </Link>
                <Link to="Makeup" className="length">
                  OTHERS
                </Link>
                <hr></hr>
                <h5>LIPS</h5>
                <hr className="new"></hr>
                <Link to="Makeup" className="length">
                  LIPSTICK
                </Link>
                <Link to="Makeup" className="length">
                  LIPGLOSS
                </Link>
                <h5>EYES</h5>
                <hr className="new"></hr>
                <Link to="Makeup" className="length">
                  EYE LINER
                </Link>
                <Link to="Makeup" className="length">
                  EYE SHADOW
                </Link>
                <Link to="Makeup" className="length">
                  EYE PENCIL
                </Link>
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
          <br></br>
          <br></br>
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
                  <img src={P} alt="Not Found" className="image"></img>
                  <img src={P1} alt="Not Found" className="image"></img>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <img src={P2} alt="Not Found" className="image"></img>
                  <img src={P3} alt="Not Found" className="image"></img>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <img src={P4} alt="Not Found" className="large"></img>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <img src={P5} alt="Not Found" className="image"></img>
                  <img src={P6} alt="Not Found" className="image"></img>
                </div>
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
              <a href="fb" class="fa fa-facebook">
                {" "}
              </a>
              &emsp; &emsp;{" "}
              <a href="tw" class="fa fa-twitter">
                {" "}
              </a>
              &emsp; &emsp;{" "}
              <a href="yo" class="fa fa-youtube">
                {" "}
              </a>
              &emsp; &emsp;{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Makeup;
