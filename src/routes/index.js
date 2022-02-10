import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";
import Landing from "../components/Landing";
import Dashboard from "../components/Dashboard"
import Land from '../components/Land'
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/Land" exact component={Land} />
        <Route path="/Login" component={Login} />
        <Route path="/ForgetPassword" component={ForgetPassword} />
        <Route path="/Register" component={Register} />
       <Route path="/" exact component={Home} />
       <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Landing" component={Landing} />
        <Route path="/:boardID" component={TrelloBoard} />
        
        
      </div>
    </Router>
  );
};

export default AppRouter;
