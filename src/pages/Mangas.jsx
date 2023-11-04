import React from "react";
import { Link } from "react-router-dom";
import AllMangas from "../Components/AllMangas";
// Page contains :  Navbar  | lot of manga's' | Footer
const Mangas = () => {
  return (
    <>
      <h2>This is the Mangas Pagess</h2>
      <AllMangas />
      <Link to="/">Back Home</Link>
    </>
  );
};

export default Mangas;
