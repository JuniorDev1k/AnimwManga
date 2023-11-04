import React from "react";
import { Link } from "react-router-dom";
import SearchAnnimes from "../Components/SearchAnnimes";

// This Page Contain : navbar | Animes (Default) , SearchAnimes and display (animes links) | Footer
const Animes = () => {
  return (
    <>
      <main className="main-anime-v1">
        <SearchAnnimes />
      </main>
    </>
  );
};

export default Animes;
