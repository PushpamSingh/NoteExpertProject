import { LuGraduationCap } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router";
import "./header.css";
import { useState } from "react";
export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <section className="header-section">
        <div className="header-div">
          <NavLink to="/" className="Notelogo">
            <LuGraduationCap className="garuationCap" />
            <h1>NOTExpert</h1>
          </NavLink>

          <nav className={active ? "ham-active" : "header-nav"}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/placements"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  Placements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  Gallery
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/developers"
                  className={({ isActive }) => {
                    return isActive ? "activelink" : "link";
                  }}
                >
                  Developers
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="hamburgur-div">
            <GiHamburgerMenu
              className="hamburgur"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      </section>
    </>
  );
};
