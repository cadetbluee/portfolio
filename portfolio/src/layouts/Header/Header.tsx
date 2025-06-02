import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
    setMenuOpen(false); // 메뉴 닫기
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(targetId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(targetId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">cadetbluee</a>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`category ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleNavClick("home")}>
          <a href="/#home">home</a>
        </li>
        <li onClick={() => handleNavClick("about")}>
          <a href="/#about">about</a>
        </li>
        <li onClick={() => handleNavClick("projects")}>
          <a href="/#projects">projects</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
