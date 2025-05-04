import React, { useState } from "react";

export default function SearchBar() {
  const [searchItem, setSearchItem] = useState("");

  

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome do filme"
        className="search-bar"
      />
      <button className="search-button">Buscar</button>
    </div>
  );
}
