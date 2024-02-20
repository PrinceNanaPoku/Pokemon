import React, { useState } from "react";
import ivysaur from "./images/ivysaur.png";
import PokemonAbout from "./PokemonAbout";
import PokemonStat from "./PokemonStats";
import SimilarPokemon from "./SimilarPokemon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import grass from "./images/grass.avif";
import poison from "./images/poison.jpg";

function DetailView({ onClose }) {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Grey Cover */}
      <div className="fixed top-0 left-0 w-2/3 h-full bg-gray-700 bg-opacity-50 z-50"></div>

      {/* Main Content */}
      <div className="fixed top-0 right-0 h-full w-1/3 bg-white shadow-md">
        <div className="bg-blue-300 border rounded-2xl mx-2 my-2">
          <div className="p-4 flex justify-between items-center">
            <button
              className="bg-white py-1 px-3 border rounded-xl"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>

          <div className="text-center">
            <img
              src={ivysaur}
              alt="Pokemon image"
              className="w-64 h-64 mx-auto rounded-full mb-4"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center bg-white mb-1">
          Ivysaur
        </h2>
        <div className="flex justify-center items-center">
          <button className="flex items-center bg-slate-200 border rounded-xl py-1 px-2 mr-4">
            <img src={grass} alt="grass" width={20} className="mr-2" />
            <p>Grass</p>
          </button>
          <button className="flex items-center bg-slate-200 border rounded-xl py-1 px-2">
            <img src={poison} alt="poison" width={20} className="mr-2" />
            <p>Poison</p>
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-4 relative">
          {/* About Tab Content */}
          {activeTab === "about" && <div>{<PokemonAbout />}</div>}

          {/* Stats Tab Content */}
          {activeTab === "stats" && <div>{<PokemonStat />}</div>}

          {/* Similar Tab Content */}
          {activeTab === "similar" && (
            <div>
              <SimilarPokemon />
            </div>
          )}

          {/* Tabs */}
          <div className="flex justify-between items-center bg-gray-300 absolute left-20 w-1/2 p-1 rounded-2xl mb-0">
            <button
              className={`py-1 px-4 rounded-2xl text-xs ${
                activeTab === "about" ? "bg-white" : ""
              }`}
              onClick={() => handleTabChange("about")}
            >
              About
            </button>
            <button
              className={` py-1 px-4 rounded-2xl text-xs ${
                activeTab === "stats" ? "bg-white" : ""
              }`}
              onClick={() => handleTabChange("stats")}
            >
              Stats
            </button>
            <button
              className={`py-1 px-4 rounded-2xl text-xs ${
                activeTab === "similar" ? "bg-white" : ""
              }`}
              onClick={() => handleTabChange("similar")}
            >
              Similar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
