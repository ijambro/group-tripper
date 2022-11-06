import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <a href="/">
        <span id="logo">
          <img src="/icons8-suitcase-64.png"></img>
          <span id="logo-text">GroupTripper</span>
        </span>
      </a>
      <nav>
        <ul>
          {/* <li id="nav-welcome">Welcome, Jake</li> */}
          <li id="nav-all">
            <Link to="/trip">My Trips</Link>
          </li>
          <li id="nav-new">Plan New Trip</li>

          <li id="nav-account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#683fac"
              stroke="white"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
            </svg>
            <div>
              <Link to="/login">Logout</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
