import React, { useState } from "react";
import logo from "assets/images/doanhNhan.png";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      link: "#root",
      img: logo,
    },
    {
      link: "#trangChu",
      content: "Home",
    },
    {
      link: "#practiceAreas",
      content: "Practice Areas",
    },
    {
      link: "#aboutUs",
      content: "About Us",
    },
    {
      link: "#pages",
      content: "Pages",
    },
    {
      link: "#blog",
      content: "Blog",
    },
    {
      link: "#contactUs",
      content: "Contact Us",
    },
  ];
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-dp-big">
        <ul className="listNavbar">
          {menu.map((item, index) => {
            return (
              <li className="itemNavbar" key={index}>
                <a href={item.link}>
                  {!item.img ? (
                    item.content
                  ) : (
                    <img src={logo} alt={logo} className="img-logo" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav
        className={`navbar navbarSmall navbar-dp-small ${
          !!toggle && "nav-open"
        }`}
        style={{
          opacity: toggle && "1",
        }}
      >
        <ul className="listNavbar">
          <li className="itemNavbar itemLogo">
            <a href="#root">
              <img src={logo} alt={logo} className="img-logo" />
            </a>
          </li>

          <li
            className="itemNavbar icon"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {!toggle ? (
              <i className="far fa-bars"></i>
            ) : (
              <i className="far fa-times"></i>
            )}
          </li>
        </ul>

        {
          <>
            <ul className="navMobile">
              <li className="itemNavbar">
                <a href="#khoaHoc">Khóa học</a>
              </li>
              <li className="itemNavbar">
                <a href="#bio">Bio</a>
              </li>
              <li className="itemNavbar">
                <a href="#hocPhi">Học phí</a>
              </li>
              <li className="itemNavbar">
                <a href="#dangKy">Đăng ký</a>
              </li>
            </ul>
          </>
        }
      </nav>
    </div>
  );
}

export default NavBar;
