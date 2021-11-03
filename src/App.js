import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Terms from "./Terms";
import Privacy from "./Privacy";
import BrightMedia from "./brightmedia/BrightMedia";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import Creator from "./brightmedia/components/Creator/Creator";
import { BrightToken } from "./BrightToken.js/BrightToken";
import { BrightMobToken } from "./BrightToken.js/BrightMobToken";
import Download from "./brightmedia/components/Download";
import Shop from "./brightmedia/components/Shop/Shop";
import ShopDetail from "./brightmedia/components/Shop/Components/ShopDetail";
import Cart from "./brightmedia/components/Shop/Components/Cart";
import WishList from "./brightmedia/components/Shop/Components/WishList";
import Login from "./brightmedia/components/Shop/Components/Login";
import SignUp from "./brightmedia/components/Shop/Components/SignUp";
import Checkout from "./brightmedia/components/Shop/Components/Checkout";
import Blog from "./brightmedia/components/Blog";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />
        </Route>
        <Route path="/brightmedia" exact>
          <BrightMedia />
        </Route>
        <Route path="/privacy" exact>
          <Privacy />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
        <Route path="/creator" exact>
          <Creator />
        </Route>
        <Route path="/tbt" exact>
          <BrightToken />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
        <Route path="/detaildshop" exact>
          <ShopDetail />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>

        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/mobiletoken" component={BrightMobToken} />
        <Route path="/download" exact>
          {Download}
        </Route>
        <Route path="/brightmedia/blog" exact>
          <Blog />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/cart/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
