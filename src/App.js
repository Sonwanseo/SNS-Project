import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FindID from "./Components/FindID/FindID";
import FindPW from "./Components/FindPW/FindPW";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/findID" component={FindID} />
        <Route path="/findPW" component={FindPW} />
        <Route path="/verifyEmail" component={VerifyEmail} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
