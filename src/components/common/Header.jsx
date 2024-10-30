import React, { useEffect } from "react";
import { navItems, authLink } from "../../constants/data";

// import "./Header.css";
import { Link } from "react-router-dom";
console.log(navItems);

const Header = () => {
  const darkmode = true;

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  });

  return (
    <nav className="sticky top-0 z-50 border-b  border-neutral-700/80">
      <div className="container relative">
        <div className="nav-inside-wrapper flex justify-between items-center">
          <div className="logo-wrapper">
            <div className="logo">
              <div className="round-dot w-8 h-8 rounded-full bg-indigo-800"></div>
            </div>
            <span className="logo-text">AceDot.Dev</span>
          </div>
          <ul className="nav-wrapper">
            {navItems.map((item, index) => (
              <li key={index}>
                {/*리액트에서는 a태그를 사용하지 않고,Link 컴포넌트를 사용한다 
                경로는 href 대신 to를 사용한다.*/}
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="info-wrapper">
            {authLink.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                style={{
                  padding: 8 + "px" + 12 + "px",
                  borderRadius: 6 + "px",
                  background:
                    index === 0
                      ? "transparent"
                      : "linearGradient(to right, #6366f1 0%, #3730a3 100%))",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button>{darkmode ? "light" : "dark"}</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
