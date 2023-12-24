import './App.css';
import logo from "./navlogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <nav class="navbar navbar-default">
        <div class="container-fluid nav-main">
          <div class="navbar-header">
          <img src={logo} className="zylus-logo" alt="logo" />
          </div>
          <ul class="nav navbar-nav nav-bar-list">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#">Solutions</a></li>
            <li class="nav-item"><a href="#">Pricing</a></li>
            <li class="nav-item"><a href="#">About</a></li>
            <button class="button btn sign-up">Sign Up</button>
            <button class="button btn login">Login</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
