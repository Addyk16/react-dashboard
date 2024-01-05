import React, { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import userImg from "../../assets/userImg.jpg";
import bell from "../../assets/bell.png";
import "./Header.css";
import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import SidebarContext from "../../context/SidebarContext";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } =
    useContext(SidebarContext);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <header className="header">
      <div className="header-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={handleSidebarToggle}>
          <AiOutlineMenuFold
            className={`menu-icon ${
              isSidebarOpen ? "" : "menu-icon-close"
            }`}
          />
        </button>
        <span className="header-title hidden md:block">
          Hello Mad ✋
        </span>
      </div>
      <div className="search">
        <TextInput
          icon={SearchIcon}
          placeholder="Search"
        />
      </div>
      <div className="header-right hidden lg:flex">
        <button className="btn">
          <MdOutlineFileUpload size={22} />
          New Upload
        </button>
        <div className="button-box img-fit-cover">
          <img src={bell} alt="notifications" />
        </div>
        <div className="button-box ">
          <AiOutlineMessage size={20} />
        </div>
        <div className="button-box ">
          <TbActivityHeartbeat size={20} />
        </div>
        <div className="user-info">
          <div className="user-text">
            <span className="user-name">TheMad</span>
            <span>Designer</span>
          </div>
          <div className="user-img img-fit-cover">
            <img src={userImg} alt="profile pic" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
