import React from "react";
import "../../style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav_wraaper">
        <a className="logo" aria-label="홈">
          <img src="logo.png" width={150} height={20} />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-link">
                영화
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                TV 프로그램
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                인기
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                커뮤니티
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
