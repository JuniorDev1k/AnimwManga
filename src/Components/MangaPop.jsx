import React, { useState, useEffect } from "react";
import "../styles/Top.css";

const MangaPop = () => {
  const [topmanga, setTopmanga] = useState("");

  useEffect(() => {
    //fetching top Manga's'
    const FetchDataTopManga = async () => {
      try {
        setTimeout(async () => {
          const responseM = await fetch("https://api.jikan.moe/v4/top/manga");
          const { data } = await responseM.json();
          setTopmanga(data);
          console.log(data);
          console.log("All mNAGA");
        }, 5000);
      } catch (error) {
        console.log(`this is : erroe : ${error}`);
      }
    };

    FetchDataTopManga();
  }, []);

  return (
    <>
      {!topmanga ? (
        <p>Loading .... </p>
      ) : (
        <div className="manga-container">
          <h1>TOP MANGAS OF THE YEAR</h1>
          <section className="slider">
            {topmanga.map((i) => {
              const { mal_id, images, title, rank, url } = i;
              return (
                <div className="Top-manga-card" key={mal_id}>
                  <a href={url}>
                    <img src={images.webp.image_url} alt="manga" />
                  </a>
                  <div className="Top-manga-card-dettails">
                    <h1 id="magna-title">{title}</h1>
                    <p>{rank}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
};

export default MangaPop;
