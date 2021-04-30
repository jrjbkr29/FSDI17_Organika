import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from './components/catalog';
import Todo from './components/todo';
import HomePage from './components/homepage';
import About from './components/about';

import { BrowserRouter, Route, Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/todo" exact component={Todo}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
       
        <Footer></Footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
