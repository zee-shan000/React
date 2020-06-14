import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <center>
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
        </center>
      </div>
    );
  }
}
export default Footer;
