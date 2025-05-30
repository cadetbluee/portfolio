import React from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (targetId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // 페이지 전환 후 스크롤하려면 약간의 딜레이 필요
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
    <header>
      <h1>
        <a href="/">cadetbluee</a>
      </h1>
      <nav className="category">
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
