import React, { useContext, useState } from "react";
import logo from "../../assets/logo.jpg";
import adImg from "../../assets/adImage.webp";
import { navigationLinks } from "../../data/data";
import { FaAngleRight } from "react-icons/fa6";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import "./Sidebar.css";
import SidebarContext from "../../context/SidebarContext";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "" : "sidebar-close"
      } `}>
      <div className="title">
        <div className="title-img img-fit-cover">
          <img src={logo} alt="logo" />
        </div>
        <span className="title-name">
          Skilify Admin
        </span>
      </div>
      {/* navigation */}
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((naviagationLink) => (
            <li
              className="nav-item"
              key={naviagationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  naviagationLink.id === 1
                    ? "nav-link-active"
                    : ""
                }`}>
                {naviagationLink.icon}
                <span className="nav-link-title">
                  {naviagationLink.title}
                </span>
                {naviagationLink.title !==
                "Message" ? (
                  <FaAngleRight className="nav-side-icon" />
                ) : (
                  <TbSquareRoundedNumber2Filled className="nav-side-icon" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* navigation end */}
      {/* ad box */}
      <section className="ad-box">
        <div className="ad-img img-fit-cover">
          <img src={adImg} alt="ad" />
        </div>
        <button className="ad-box-button">
          Get Subscription
        </button>
      </section>
      {/* ad box end */}
      {/* footer */}
      <footer className="footer">
        <span className="footer-title">
          Skilify Teacher Dashboard Admin
        </span>
        <span className="footer-subtitle">
          &copy; 2020 All right reserved`{" "}
        </span>
      </footer>
    </div>
  );
};

export default Sidebar;
