import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';


class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
          <li className="menu"><a><Link to='/admin/home'>Home</Link></a></li>
          <li className="menu"><Link to='/admin/category'>Category</Link></li>
          <li className="menu"><Link to='/admin/product'>Product</Link></li>
          <li className="menu"><Link to='/admin/order'>Order</Link></li>
          <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
          
          
          </ul>
        </div>
        <div className="float-right">
        
          Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={this.lnkLogoutClick.bind(this)}>Logout</Link>
          
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;