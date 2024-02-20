import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import PageSizeSelector from "./PageSizeSelector";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import DetailView from "./DetailView";

function ListView() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

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

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const handleViewButtonClick = (pokemon) => {
    setSelectedPokemonId(pokemon);
    setShowDetailView(true);
  };

  const handleCloseDetailView = () => {
    setShowDetailView(false);
    setSelectedPokemonId(null);
  };

  return (
    <>
      <TopBar />
      <div className="container mx-auto p-4">
        {/* Pokemon Grid */}
        <div className="grid grid-cols-4 gap-4">
          {pokemonList.map((pokemon, index) => (
            <div key={index} className="relative group">
              <Link
                to={`/pokemon/${currentPage * pageSize - (pageSize - index)}`}
                className="flex flex-col items-center border border-gray-300 p-4 rounded-md"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                  className="w-24 h-24 mb-1"
                />
                <span className="mb-5">{pokemon.name}</span>
              </Link>
              {/* View Button */}
              <Link
                to={`/pokemon/${currentPage * pageSize - (pageSize - index)}`}
                className="absolute left-0 right-0 bottom-0 bg-pink-500 text-white py-1 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-xl mt-5 "
                onClick={() => handleViewButtonClick(pokemon)}
              >
                View Pokemon
                <FontAwesomeIcon icon={faEye} className="pl-14" />
                {showDetailView && (
                  <DetailView
                    pokemonId={selectedPokemonId}
                    onClose={handleCloseDetailView}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination and Page Size Selector */}
        <div className="flex justify-between items-center mt-4">
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {/* Page Size Selector */}
          <PageSizeSelector
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>
      </div>
    </>
  );
}

export default ListView;
