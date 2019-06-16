import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
export default class Navbar extends Component {
          render() {
                    return (
                      <div>
                        <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                          <Link to="/">
                            <img
                              src={logo}
                              alt="AC"
                              className="navbar-brand"
                            />
                          </Link>
                          <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                              <Link
                                to="/"
                                className="nav-link"
                              >
                                products
                              </Link>
                            </li>
                          </ul>
                          {/* ml-auto = margin left auto (keeps the cart button at the right) */}
                          <Link to="/cart" className="ml-auto">
                              <button>
                                        <i className="fas fa-cart-plus"/> My Cart
                              </button>
                          </Link>
                        </nav>
                      </div>
                    );
          }
}
