import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "./Containers/LoginContainer/LoginContainer";
import RegisterContainer from "./Containers/RegisterContainer/RegisterContainer";
import FindPWContainer from "./Containers/FindPWContainer/FindPWContainer";
import HomeContainer from "./Containers/HomeContainer/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginContainer} exact />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/findPW" component={FindPWContainer} />
        <Route path="/home" component={HomeContainer} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
