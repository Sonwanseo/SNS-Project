import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "./Containers/LoginContainer/LoginContainer";
import Register from "./Components/Register/Register";
import FindIDContainer from "./Containers/FindIDContainer/FindIDContainer";
import FindPW from "./Components/FindPW/FindPW";
import Timeline from "./Components/Timeline/Timeline";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginContainer} exact />
        <Route path="/register" component={Register} />
        <Route path="/findID" component={FindIDContainer} />
        <Route path="/findPW" component={FindPW} />
        <Route path="/home" component={Timeline} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
