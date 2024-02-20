import React, { useState } from "react";

function PokemonCard({ pokemon }) {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden">
      {/* Pokemon card content */}
      <button
        onClick={handleViewClick}
        className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity"
      >
        View
      </button>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg z-10">
            {/* Modal content */}
            <h2 className="text-2xl font-bold mb-4">{pokemon.name}</h2>
            {/* Render Pokemon details here */}
            <button
              onClick={() => setShowModal(false)}
              className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
