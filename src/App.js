import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHome } froDefaultm '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

/**
 *
 *
 <div className="container">
      <div className="row">
        <div className="col-lg-6">
          column number one
        </div>
        <div className="col-lg-6">
        <FontAwesomeIcon icon={faHome} />
        </div>
      </div>
    </div>
 */
