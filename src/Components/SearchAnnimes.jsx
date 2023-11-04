import React from "react";

import { useState } from "react";

const SearchAnnimes = () => {
  const [searchInput, setSearchInput] = useState(""); // state of the anime search
  const [datau, setDatau] = useState("");

  const handlSubmit = async (e) => {
    // Handling The submit  for the Search
    e.preventDefault();
    try {
      const Resuult = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchInput}`
      );
      const { data } = await Resuult.json();
      setDatau(data);
    } catch (error) {
      console.log(`Error Broder`);
    }
  };

  return (
    <>
      <form onSubmit={handlSubmit} id="anime-list">
        <input
          type="Search"
          name=""
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          id="searchAnime"
          placeholder="Search Anime ..."
        />
        <button type="submit">Search</button>
      </form>

      {!datau ? (
        <p></p>
      ) : (
        <main className="S-ANIMES-CARD">
          {datau.map((A) => {
            const { images, mal_id, title, episodes } = A;

            return (
              <artical className="S-ANIME-CARD" key={mal_id}>
                <img src={images.webp.image_url} alt="img" />
                <div className="dettials">
                  <h3>{title}</h3>
                  <p id="episodes-s">{episodes}</p>

                  <p id="TV">TV</p>
                </div>
              </artical>
            );
          })}
        </main>
      )}
    </>
  );
};

export default SearchAnnimes;
