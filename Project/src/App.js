import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/shared/Header/Header.jsx";
import Footer from "./components/shared/Footer/Footer.jsx";
import PersonManager from "./components/PersonManager/PersonManager.jsx";
import PageNotFound from "./components/shared/PageNotFound/PageNotFound.jsx";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/tasks" />} />
            <Route path="/tasks" exact component={PersonManager} />
            <Route path="/**" component={PageNotFound} />
          </Switch>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
