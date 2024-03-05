import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm-18.096 86.22a18.099 18.099 0 0 1 36.197 0v53.975a18.099 18.099 0 0 1-36.197 0zM256 348.589a92.413 92.413 0 0 1-32.963-178.751v33.38a62.453 62.453 0 1 0 65.93 0v-33.38A92.415 92.415 0 0 1 256 348.588z"
                data-name="Logout"
              />
            </svg>
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html">Shop</a>
              </li>
              <li>
                <a href="index.html">Blog</a>
              </li>
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
