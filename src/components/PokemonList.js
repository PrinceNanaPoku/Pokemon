import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageSizeSelector from "./PageSizeSelector";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (currentPage - 1) * pageSize
          }&limit=${pageSize}`
        );
        setPokemonList(response.data.results);
        setTotalPages(Math.ceil(response.data.count / pageSize));
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    }
    fetchPokemonList();
  }, [currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Pokemon Grid */}
      <div className="grid grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <Link
            to={`/pokemon/${currentPage * pageSize - (pageSize - index)}`}
            key={index}
            className="flex flex-col items-center border border-gray-300 p-4 rounded-md hover:bg-gray-100"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
              className="w-24 h-24 mb-2"
            />
            <span>{pokemon.name}</span>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <div>
          <button
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          >
            Previous
          </button>
          <button
            onClick={() =>
              handlePageChange(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        </div>
        <PageSizeSelector />
      </div>
    </div>
  );
}

export default PokemonList;
