import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router, useLocation, Redirect } from "react-router-dom";
//import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Userlist from "./containers/Userlist";
import Home from "./containers/Home";


interface IProps {
  isAuthenticated: boolean
}
const Routes = (props: IProps) => {
   //const location  = useLocation();
  // console.log(location.pathname);
  return (
    <Router>
      {
        props.isAuthenticated
           && window.location.pathname === '/login' 
          ?
          <Redirect to="/" />
          :
          <Switch>
            <Route exact path="/Login" >
              <Login />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
            <Route exact path="/Userlist">
              <Userlist />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      }
    </Router>
  );
}
export default Routes;