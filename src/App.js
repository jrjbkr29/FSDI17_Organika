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
import Cart from './components/cart';

import { BrowserRouter, Route, Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <div id="content">
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/todo" exact component={Todo}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            </div>
          </Switch>
        
          
        </div>
        <Footer className="footer"></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
