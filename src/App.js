import React, { Component } from 'react';
import routes from './routes';
import { NavLink } from 'react-router-dom';
import './App.css';

const Topnav = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Products</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>

</nav>



class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Topnav />
        { routes }
      </div>
    );
  }
}

export default App;
