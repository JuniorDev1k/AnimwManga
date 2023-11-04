import React from "react";
import "../Components/style.css";
import Header from "../Components/Header";
import Contact from "../Components/Contact";
import MangaPop from "../Components/MangaPop";
import TopAnime from "../Components/TopAnime";
// This Page Contain navbar | topAnime | topManga | Contact (basicForm) |
const Home = () => {
  return (
    <>
      <main className="home-main">
        <Header />
        <section className="home-sliders">
          <TopAnime />
          <MangaPop />
        </section>
        <Contact />
      </main>
    </>
  );
};

export default Home;
