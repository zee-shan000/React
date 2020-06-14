import React from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";
class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <center>
          <p className="ZS">
            Panda
          </p>
          <br></br>
          <br></br>
          <br></br>
          <div className="enter">
            <select id="inputCountry" className="list">
              <option selected className="grey">
                Pakistan
              </option>
              <option className="grey">United State</option>
              <option className="grey">Australia</option>
              <option className="grey">New Zealand</option>
              <option className="grey">United Kingdom</option>
              <option className="grey">Canada</option>
              <option className="grey">South Africa</option>
              <option className="grey">Rest of the world</option>
            </select>
          </div>
          <Link to="/Home">
            <button type="submit" className="butt">
              <b>Enter</b>
            </button>
          </Link>
        </center>
      </div>
    );
  }
}
export default FirstPage;
