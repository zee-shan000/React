import React from "react";
import "./Home.css";
import "./Header.css";
import "./Footer.css";
import S1 from "../images/pk.png";
import S2 from "../images/bag.png";
import { Link } from "react-router-dom";
import Slide1 from "../images/lasttry1.jpg";
import Slide2 from "../images/FirstPage.jpg";
import Slide3 from "../images/hoodie1.jpg";
import Slide4 from "../images/frag1.jpg";
import Sl from "../images/kfrontt.jpg";
import Sl1 from "../images/kback.jpg";
import Sl2 from "../images/men0.jpg";
import Sl3 from "../images/men1.jpg";
import Sl4 from "../images/shawl.jpg";
import Sl5 from "../images/kid3.jpg";
import Sl6 from "../images/kid.jpg";
import Sl7 from "../images/kid2.jpg";
import Sl8 from "../images/kid1.jpg";
import p1 from "../images/bag.png";
import lg from "../images/logo.png";
class Home extends React.Component {
  render() {
    return (
      <div className="back">
        <div className="main">
          <div className="fix">
            <Link to="Home">
              <img src={lg} alt="Panda" className="Hell"></img>
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
              <Link to="/NewArrival">
                {" "}
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
              <Link to="/Women">
                {" "}
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
          <br></br>
          <div className="container">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="item active">
                  <img src={Slide1} alt="Not Found" className="imagess" />
                  <h1 className="headd">Kameez Shalwaar</h1>
                  <h3 className="text">
                    Wear the colors of your choice, choose from Z. Winter
                    Collection. This winter, be the center of attention with Z.
                    Winter Collection 2019. Boys - Winter Collection. Girls -
                    Winter Collection.
                  </h3>
                  <img src={p1} alt="Not Found" className="shop1"></img>
                  <a href="New" className="headdd">
                    Shop Now
                  </a>
                </div>
                <div className="item">
                  <img src={Slide2} alt="Not Found" className="imagess" />
                  <h1 className="headd">Lawn Collection</h1>
                  <h3 className="text">
                    Wear the colors of your choice, choose from Z. Winter
                    Collection. This winter, be the center of attention with Z.
                    Winter Collection 2019. Boys - Winter Collection. Girls -
                    Winter Collection.
                  </h3>
                  <img src={p1} alt="Not Found" className="shop1"></img>
                  <a href="New" className="headdd">
                    Shop Now
                  </a>
                </div>
                <div className="item">
                  <img src={Slide3} alt="Not Found" className="imagess" />
                  <h1 className="headd">Hoodie</h1>
                  <h3 className="text">
                    Hoodies + Sweatshirts for Men. UO's selection of hoodie
                    sweatshirts and pullover sweatshirts range from standard
                    black and grey hoodies to graphic picks in stand-out blue
                    and green hues.
                  </h3>
                  <img src={p1} alt="Not Found" className="shop1"></img>
                  <a href="New" className="headdd">
                    Shop Now
                  </a>
                </div>
                <div className="item">
                  <img src={Slide4} alt="Not Found" className="imagess" />
                  <h1 className="headd">Essence Gift</h1>
                  <h3 className="text">
                    Happiness radiates like the fragrance from a flower and
                    draws all good things towards you.So gift fragrance to your
                    love ones.To make them Happy and more Valueable
                  </h3>
                  <img src={p1} alt="Not Found" className="shop1"></img>
                  <a href="New" className="headdd">
                    Shop Now
                  </a>
                </div>
              </div>
              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div>
            <br></br>
            <img src={Sl} alt="Not Found" className="baki"></img>
            <img src={Sl1} alt="Not Found" className="baki1"></img>
            <h1 className="j">Ladies Kurti</h1>
            <p className="jj">
              Ready to wear formal and casual kurti collection.
            </p>
          </div>
          <br></br>
          <div>
            <img src={Sl3} alt="Not Found" className="baki3"></img>
            <img src={Sl2} alt="Not Found" className="baki2"></img>
            <h1 className="j1">Mens Wear</h1>
            <p className="jj2">Experience the most premium wear for men.</p>
          </div>
          <div>
            <img src={Sl4} alt="Not Found" className="ll"></img>
            <h1 className="shawll">Men Shawls</h1>
            <br></br>
            <a href="shop" className="shawl1">
              Shop Now
            </a>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="neechy">
            <Link to="NewArrival">
              <a href="New Arrival" className="newarrivals">
                New Arrivals
              </a>
            </Link>
            <h1 className="bg">Boys & Girls</h1>
            <img src={Sl5} alt="Not Found" className="Sl5"></img>
            <img src={Sl8} alt="Not Found" className="Sl678"></img>
            <img src={Sl7} alt="Not Found" className="Sl678"></img>
            <img src={Sl6} alt="Not Found" className="Sl678"></img>
            <h2 className="firstline">NEW COLLECTION</h2>
            <h2 className="centline">DRESS BRIGHT AND LIVELY</h2>
            <h2 className="lasttline">WITH Z. KIDS COLLECTION</h2>
          </div>
          <div className="be">
            <h1 className="be2">BE THE FIRST</h1>
            <p>
              New arrivals. Exclusive previews. First access to{" "}
              <p>
                sales. Sign up to stay in the know.Sign up to stay in the know.
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
          </div>
          <br></br>
          <br></br>
        </center>
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
export default Home;
