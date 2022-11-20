import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import SchemeAddition from "./routes/schemeAddition";

const MedicalEasyJourney = () => {
  return (
    <React.StrictMode>
      <Router history={history}>
        <Switch>
          <Route path="/" component={SchemeAddition} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<MedicalEasyJourney />, document.getElementById("root"));
