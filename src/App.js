import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import NewArrival from "./Components/NewArrival";
import Women from "./Components/Women";
import Men from "./Components/Men";
import BoysGirls from "./Components/BoysGirls";
import Fragrance from "./Components/Fragrances";
import Makeup from "./Components/Makeup";
import Catalogue from "./Components/Catalogue";
import Bag from "./Components/Bag";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <Route path="/" exact component={FirstPage}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/NewArrival" component={NewArrival}></Route>
      <Route path="/Women" component={Women}></Route>
      <Route path="/Men" component={Men}></Route>
      <Route path="/BoysGirls" component={BoysGirls}></Route>
      <Route path="/Fragrances" component={Fragrance}></Route>
      <Route path="/Makeup" component={Makeup}></Route>
      <Route path="/Catalogue" component={Catalogue}></Route>
      <Route path="/Bag" component={Bag}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/SignIn" component={SignIn}></Route>
    </div>
  );
}
export default App;
