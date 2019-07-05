import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/user/Signup";
import Login from "./components/user/Login";
 import NotFound from './components/Front/NotFound'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
          
          
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NotFound} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App