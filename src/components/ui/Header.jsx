import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { moneyContext } from "../../services/providers/money";
const Header = () => {
  const hidden = useRef();
  const [price, setPrice] = useState("UZS");
  const navigate = useNavigate();
  const {money, setMoney} = useContext(moneyContext);
  function openNavbarFunction() {
    hidden.current?.classList.remove("hidden");
  }
  function closeNavbarFunction() {
    hidden.current?.classList.add("hidden");
  }
  return (
    <>
      <header id="site-header">
        <div id="site-header-container">
          <div
            onClick={() => {
              navigate("/");
            }}
            id="site-header-logo"
            className="cursor-pointer"
          >
            <img
              className="rounded-full"
              src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/28140224/Urban-City-Apartment-by-marcololstudio.png"
              alt=""
            />
            <p>E-ko'chmas mulk</p>
          </div>

          <input
            type="checkbox"
            className="toggleSideMenu"
            id="toggleSideMenu"
            autoComplete="off"
          />
          <label htmlFor="toggleSideMenu" className="hamburger-icon">
            <div className="hamburger-menu-line diagonal-1"></div>
            <div className="hamburger-menu-line horizontal"></div>
            <div className="hamburger-menu-line diagonal-2"></div>
          </label>

          <div id="side-menu-container">
            <div id="before-side-menu">
              <span>Content before main menu</span>
            </div>
            <nav id="top-menu">
              <ul id="main-menu">
                <li className="main-menu-item">
                  <NavLink to={"/"}>Bosh sahifa</NavLink>
                </li>
                <li className="main-menu-item">
                  <NavLink to={"/category"}>Kategoriya</NavLink>
                </li>
                <li className="main-menu-item">
                  <NavLink to={"/design"}>Namunalar</NavLink>
                </li>
              </ul>
            </nav>
            <div id="after-side-menu">
              <span>Content after main menu</span>
              <div className="social-buttons">
                <i className="icon-linkedin">
                  <img
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                  />
                </i>
                <i className="icon-facebook-squared">
                  <img
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
                  />
                </i>
                <i className="icon-vkontakte">
                  <img
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/vkontakte.png"
                  />
                </i>
                <i className="icon-twitter">
                  <img
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"
                  />
                </i>
              </div>
            </div>
          </div>

          <div id="site-header-search">
            <div id="site-header-search-container">
              <form action="" autoComplete="on">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search..."
                />
                <button id="search_submit" type="submit">
                  <img
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/20/666666/search--v1.png"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="money mx-5">
            {money === "UZS" ? (
              <button
                onClick={() => {
                  setMoney("USD");
                  localStorage.setItem("money", JSON.stringify("USD"));
                }}
              >
                UZS
              </button>
            ) : (
              <button
                onClick={() => {
                  setMoney("UZS");
                  localStorage.setItem("money", JSON.stringify("UZS"));
                }}
              >
                USD
              </button>
            )}
          </div>
          <div id="site-header-auth-container">
            {JSON.parse(localStorage.getItem("user_id")) ? (
              <button
                onClick={() => {
                  navigate("/login");
                  localStorage.removeItem("user_id");
                  localStorage.removeItem("user_data");
                }}
                id="site-header-login-button"
                className="site-header-auth-button"
              >
                <i className="icon-logout">
                  <img
                    className="icon-header"
                    src="https://img.icons8.com/ios-filled/18/666666/login-rounded-right.png"
                  />
                </i>
                <span>Chiqish</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  id="site-header-login-button"
                  className="site-header-auth-button"
                >
                  <i className="icon-logout">
                    <img
                      className="icon-header"
                      src="https://img.icons8.com/ios-filled/18/666666/login-rounded-right.png"
                    />
                  </i>
                  <span>Kirish</span>
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  id="site-header-registration-button"
                  className="site-header-auth-button"
                >
                  <i className="icon-user">
                    <img
                      className="icon-header"
                      src="https://img.icons8.com/ios-glyphs/18/666666/user--v1.png"
                    />
                  </i>
                  <span>Ro'yxatdan o'tish</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
