// src/components/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    async function fetchPokemonInfo() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
        setLogo(response.data.sprites.other["official-artwork"].front_default);
      } catch (error) {
        console.error("Error fetching Pokemon info:", error);
      }
    }
    fetchPokemonInfo();
  }, []);

  return (
    <div className="flex justify-center items-center h-5/6">
      <div className="text-center">
        {logo && (
          <img
            src={logo}
            alt="Pokébook Logo"
            className="bg-cover bg-center mx-auto mt-14 mb-0 size-40"
          />
        )}
        <h1 className="text-3xl font-bold mb-1">
          <span className="text-black">Poké</span>
          <span className="text-pink-500">book</span>
        </h1>
        <p className="text-gray-700 mb-10 text-xs font-thin">
          Largest Pokemon index with information <br />
          about every Pokemon you can think of
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter pokémon name"
            className="w-full p-2 border-4 border-pink-500 rounded-2xl pl-2 text-xs"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fas fa-search absolute size-5 right-3 top-3 text-pink-500"
          />
        </div>
        <a
          href="/pokemon"
          className="block text-center text-black px-4 py-2 text-xs underline"
        >
          View all
        </a>
      </div>
    </div>
  );
}

export default Home;
