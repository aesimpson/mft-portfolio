import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return ([
      <div className="contact-bar py-2">
        <div className="container">
          <div className="row justify-content-end">
            <span class="col-auto">
              Call <a href="tel:+1-925-281-0676"> (925) 281-0676</a> or <a href="mailto:marinaoribello@gmail.com">email</a> to schedule a free consultation
            </span>
          </div>
        </div>
      </div>,
      <nav
        className="navbar navbar-expand-lg"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">
              <p className="logo-line-1">Marina Oribello</p>
              <p className="logo-line-2">Marriage & Family Therapist</p>
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              tabIndex="0"
              data-target="#navMenu" 
              aria-controls="navMenu" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            id="navMenu"
            className="collapse navbar-collapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ])
  }
}

export default Navbar
