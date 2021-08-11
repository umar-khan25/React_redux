import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    }
  }

  showSidebar = () => this.setState({ sidebar: !this.state.sidebar })
  render() {
    return (
      <>
        <div className="nav">

          <div className={this.state.sidebar ? "collapse" : ""} id="navbarToggleExternalContent">
            <div className="nav-items">

              <ul className="nav-text">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/"><li>Logout</li></Link>
              </ul>
            </div>
          </div>
          <nav className="nav-button">
            <button className="navbar-toggler" onClick={this.showSidebar} type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="nav-bars"><FaIcons.FaBars /></span>
            </button>
          </nav>

        </div>
      </>

    );

  }


}
export default SideBar;