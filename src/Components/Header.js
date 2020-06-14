import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import S1 from "../images/pk.png";
import lg from "../images/logo.png";
import S2 from "../images/bag.png";
class Header extends React.Component {
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
              <a href="www.google.com" className="move">
                Sign in{" "}
              </a>
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
      </div>
    );
  }
}
export default Header;
