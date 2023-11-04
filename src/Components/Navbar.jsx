import React from "react";

import { Link } from "react-router-dom";
import "../styles/nav.css";

const navbar = () => {
  const navlinks = [
    { name: "Home", link: "/", id: 1 },
    { name: "Anime", link: "/Animes", id: 3 },
    { name: "Manga", link: "/Mangas", id: 4 },
    { name: "Contact", link: "#Contact", id: 5 },
    { name: "About", link: "#footer", id: 6 },
  ];

  return (
    <div className="nav">
      <div className="nav-logo">
        <h1>
          <span>Anim</span>w<span>Manga</span>
        </h1>
      </div>
      <ul className="nav-links">
        {navlinks.map((l) => {
          const { name, link, id } = l;
          return (
            <li key={id}>
              <Link className="nav-link-page" to={link}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default navbar;
