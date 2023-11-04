import React, { useEffect, useState } from "react";
import "../styles/Top.css";

const TopAnime = () => {
  const [topanime, setTopanime] = useState("");
  useEffect(() => {
    //fetching top Animes
    const FetchDataTopAnime = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/top/anime?limit=6"
        );
        const { data } = await response.json();
        setTopanime(data);
        setTimeout(() => {
          console.log(data);
          console.log("Top AAnimes");
        }, 1000);
      } catch (error) {
        console.log(`this is : erroe : ${error}`);
      }
    };

    FetchDataTopAnime();
  }, []);

  return (
    <>
      {!topanime ? (
        <p>Loaing........</p>
      ) : (
        <>
          <div className="top-container"></div>
          <h1 className="top-slider">MOST POPULAR</h1>
          <section className="Top-animes-slider">
            {topanime.map((i) => {
              const {
                mal_id,
                url,
                rank,
                episodes,
                duration,
                title,
                images,
                year,
              } = i;
              return (
                <div className="Tanime-card" key={mal_id}>
                  <a href={url}>
                    <img src={images.webp.image_url} alt="iamges" />
                  </a>

                  <div className="Tanime-card-dettails">
                    <h3>{title}</h3>
                    <p id="duration">{duration}</p>
                    <p id="episode">{episodes}</p>
                    <p id="rank">#{rank}</p>
                    <p id="year">{year}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </>
      )}
    </>
  );
};

export default TopAnime;
