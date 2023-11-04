import React from "react";
import bgImg from "../../assets/background-01.jpg";
import "./style.css";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="header-content">
          <h1> Explore Animes & Mangas</h1>
          <div className="header-btn">
            <button>TOP ANIMES</button>
            <button>TOP MANGAS</button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
