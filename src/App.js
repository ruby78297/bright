import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Terms from "./Terms";
import Privacy from "./Privacy";
import BrightMedia from "./brightmedia/BrightMedia";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Button } from "react-bootstrap";

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

        {/* <Route exact path="/privacy" component={Privacy}/>
       <Route exact path="/terms" component={Terms}/> */}
      </Switch>
    </div>
  );
}

export default App;
