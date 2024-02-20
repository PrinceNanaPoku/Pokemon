import React from "react";
import ThemeView from "./ThemeView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import bulbasaur from "./images/bulbasaur.png";
import Home from "./Home";
import { Link } from "react-router-dom";

function TopBar() {
  const [themeViewOpen, setThemeViewOpen] = useState(false);

  const handleToggleThemeView = () => {
    setThemeViewOpen(!themeViewOpen);
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      {/* Pokemon Logo */}
      <img src={bulbasaur} alt="Pokemon Logo" className="h-10 mx-2" />

      {/* Title */}
      <h1 className="text-xs font-bold">
        <span className="text-pink-600">Poké</span>
        <span>book</span>
      </h1>

      {/* Search Bar */}
      <div className="relative flex-grow mx-4">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 pl-10"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="fas fa-search absolute left-3 top-3 text-slate-500"
        />
      </div>

      {/* Theme Button */}
      <button
        className="px-4 py-4 bg-pink-500 rounded-full"
        onClick={handleToggleThemeView}
      ></button>
      {themeViewOpen && <ThemeView onClose={() => setThemeViewOpen(false)} />}
    </div>
  );
}

export default TopBar;
