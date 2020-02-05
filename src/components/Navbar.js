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

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'show',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return ([
      <div className="contact-bar py-2">
        <div className="container">
          <div className="row justify-content-end">
            <span className="col-auto">
              Call <a href="tel:+1-925-212-1695"> (925) 212-1695</a> or <a href="mailto:marinaoribellomft@gmail.com">email</a> to schedule a free consultation
            </span>
          </div>
        </div>
      </div>,
      <div className="nav-wrap">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg"
            role="navigation"
            aria-label="main-navigation"
          >
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
              onClick={() => this.toggleHamburger()}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navMenu"
              className={`collapse navbar-collapse ${this.state.navBarActiveClass}`}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClassName="active" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    ])
  }
}

export default Navbar
