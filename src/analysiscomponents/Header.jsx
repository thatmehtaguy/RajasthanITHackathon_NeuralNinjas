import React from "react";
import "./Header.css";
import Logo from "./logo1.png";

const Header = () => {

  return (
    <div>
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#top" className="logo">
                  <img src={Logo} width={300} height={200} mt-12 />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/" >
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/marketplace" >
                      Marketplace</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/loans" >Loans</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/analytics " >Analysis</a>
                  </li>
                  <li>
                    <div id="google_translate_element"></div>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-red-button-hover">
                      <a href="#contact">Contact Us Now</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
