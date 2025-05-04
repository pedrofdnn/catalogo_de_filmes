"use client";
import React, { useEffect, useState } from "react";
import API from "../services/API";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get("/movie/popular").then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movies);

  return (
    <div>
      <h1>Catalogo dos Filmes</h1>
      <SearchBar />
    </div>
  );
}
