import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">PackYourBags</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul
          className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key="index">
                <Link className={item.classname} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <button className="button-nav">Sign Up</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
