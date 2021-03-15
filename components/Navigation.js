import React, { useState } from 'react';

const Navigation = ({settings}) => {
  const [drawerState, setDrawerState] = useState('')
  const toggleDrawerState = () => {
    if (!drawerState) {
      return setDrawerState('is-active')
    }
    return setDrawerState('')
  }
  return (
    <nav className="navbar is-dark is-spaced" role="navigation">
      <div className="navbar-brand">
        <a className="flex" href="/">
          <span className="subtitle is-2 has-text-grey has-text-weight-light">MPMT</span>
          <span className="subtitle is-2 has-text-white has-text-weight-light">SALFORD</span>
        </a>

        <a role="button" className={`navbar-burger ${drawerState}`} aria-label="menu" onClick={toggleDrawerState}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${drawerState}`}>
        <div className="navbar-end">
          {/* <a href="#aboutus" className="navbar-item">
            About Us
          </a> */}
          <a href="#contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
