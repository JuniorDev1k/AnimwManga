import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import { Home, Animes, Mangas } from "./pages";

// here we set up our Routing
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animes">
          <Route index element={<Animes />} />
          <Route path=":id" element={<p> This is Anime specefik</p>} />
        </Route>
        <Route path="/Mangas" element={<Mangas />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
