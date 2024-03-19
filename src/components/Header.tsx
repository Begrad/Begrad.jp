import React from "react";
import "../css/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="https://pbs.twimg.com/profile_images/1416978828933537795/4Iv9bApx_400x400.jpg"
        alt="Begrad Logo"
        className="logo"
      />
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#members">Members</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
