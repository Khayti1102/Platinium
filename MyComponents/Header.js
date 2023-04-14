import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    
      
    <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        {
          props.serachbar?<form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>:""
        }
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Meetings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
            <li className="nav-item">
              
              <a className="nav-link" href="#"><img src="User1.jpg" /> Khyati</a>
            </li>
          </ul>
          
          
          
        </div>
      </div>
    </div>
  </nav>
  )
}
Header.defaultProps = {
  title : "Your Tiltle Here",
  searchbar: true
}


Header.propTypes = {
  title : PropTypes.string,
  serachBar : PropTypes.bool.isRequired
  // search bar pass krna hi parega nhi to error denge, if default serch bar is not defined. 
}

