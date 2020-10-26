import React from "react"
import styled from "styled-components"

const Navbar = () => {
  return (
    <NavWrapper>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top">
        <div className="container d-flex">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <a href="index.html">Maxim</a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="drop-down">
                <a href="">Drop Down</a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="drop-down">
                    <a href="#">Drop Down 2</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </NavWrapper>
  )
}
const NavWrapper = styled.div`
  #header {
    height: 72px;
    transition: all 0.5s;
    z-index: 997;
    transition: all 0.5s;
    padding: 15px 0;
    background: #000;
  }

  #header .logo h1 {
    font-size: 30px;
    margin: 0;
    padding: 6px 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  #header .logo h1 a,
  #header .logo h1 a:hover {
    color: #fff;
    text-decoration: none;
  }

  #header .logo img {
    padding: 0;
    margin: 0;
    max-height: 40px;
  }

  @media (max-width: 992px) {
    #header {
      height: 60px;
      padding: 8px 0;
    }
  }

  /*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
  /* Desktop Navigation */
  .nav-menu,
  .nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
    float: left;
  }

  .nav-menu a {
    display: block;
    position: relative;
    color: rgba(255, 255, 255, 0.8);
    padding: 8px 0 12px 0;
    transition: 0.3s;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
  }

  .nav-menu > ul > li + li {
    margin-left: 30px;
  }

  .nav-menu > ul > li > a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 3px;
    left: 0;
    background-color: #1bac91;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .nav-menu a:hover:before,
  .nav-menu li:hover > a:before,
  .nav-menu .active > a:before {
    visibility: visible;
    width: 100%;
  }

  .nav-menu a:hover,
  .nav-menu .active > a,
  .nav-menu li:hover > a {
    color: #fff;
  }

  .nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: ease all 0.3s;
  }

  .nav-menu .drop-down:hover > ul {
    opacity: 1;
    visibility: visible;
  }

  .nav-menu .drop-down li {
    min-width: 180px;
    position: relative;
  }

  .nav-menu .drop-down ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #062822;
  }

  .nav-menu .drop-down ul a:hover,
  .nav-menu .drop-down ul .active > a,
  .nav-menu .drop-down ul li:hover > a {
    color: #1bac91;
  }

  .nav-menu .drop-down > a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 5px;
  }

  .nav-menu .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
  }

  .nav-menu .drop-down .drop-down:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
  }

  .nav-menu .drop-down .drop-down > a {
    padding-right: 35px;
  }

  .nav-menu .drop-down .drop-down > a:after {
    content: "\eaa0";
    font-family: IcoFont;
    position: absolute;
    right: 15px;
  }

  @media (max-width: 1366px) {
    .nav-menu .drop-down .drop-down ul {
      left: -90%;
    }
    .nav-menu .drop-down .drop-down:hover > ul {
      left: -100%;
    }
    .nav-menu .drop-down .drop-down > a:after {
      content: "\ea9d";
    }
  }

  /* Mobile Navigation */
  .mobile-nav-toggle {
    position: fixed;
    right: 15px;
    top: 15px;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
  }

  .mobile-nav-toggle i {
    color: #fff;
  }

  .mobile-nav {
    position: fixed;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    z-index: 9999;
    overflow-y: auto;
    background: #fff;
    transition: ease-in-out 0.2s;
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    padding: 10px 0;
  }

  .mobile-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile-nav a {
    display: block;
    position: relative;
    color: #21413c;
    padding: 10px 20px;
    font-weight: 500;
    outline: none;
  }

  .mobile-nav a:hover,
  .mobile-nav .active > a,
  .mobile-nav li:hover > a {
    color: #1bac91;
    text-decoration: none;
  }

  .mobile-nav .drop-down > a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 10px;
    position: absolute;
    right: 15px;
  }

  .mobile-nav .active.drop-down > a:after {
    content: "\eaa1";
  }

  .mobile-nav .drop-down > a {
    padding-right: 35px;
  }

  .mobile-nav .drop-down ul {
    display: none;
    overflow: hidden;
  }

  .mobile-nav .drop-down li {
    padding-left: 20px;
  }

  .mobile-nav-overly {
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(16, 31, 29, 0.6);
    overflow: hidden;
    display: none;
    transition: ease-in-out 0.2s;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav {
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
  }
`

export default Navbar
