import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-between">
              <div className="col-sm-12 col-lg-auto">
                <p><b>Marina Oribello, Marriage & Family Therapist, MA, LMFT</b></p> 
                <p>2 Crow Canyon Ct #110 <span className="divider">|</span> San Ramon, CA 94583 <span className="divider">|</span> <a href="https://goo.gl/maps/y2b3mVLkcyGSH4Ca9" target="_blank" rel="noopener noreferrer">Map</a></p>
              </div>
              <div className="col-sm-12 col-lg-auto">
                <p>Call or email to schedule your free consultation</p>
                <p><a href="tel:+1-925-212-1695"> (925) 212-1695</a> <span className="divider">|</span> <a href="mailto:marinaoribellomft@gmail.com">marinaoribellomft@gmail.com</a></p>
              </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
