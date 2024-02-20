import React from "react";
import bulbasaur from "./images/bulbasaur.png";
import venusaur from "./images/venusaur2.jpg";

const SimilarPokemon = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-center">Similar</h2>
      <div className="grid grid-cols-2 bg-slate-100 py-2 mx-7 text-center mb-1">
        <div className="border rounded-xl bg-white my-1 mx-2">
          <div className="border rounded-xl bg-slate-100 my-1 mx-1">
            <img src={bulbasaur} alt="first-image" />
          </div>
          <p>Bulbasaur</p>
        </div>
        <div className="border rounded-xl bg-white my-1 mx-2">
          <div className="border rounded-xl bg-slate-100 my-1 mx-1">
            <img src={venusaur} alt="second-image" />
          </div>
          <p>Venusaur</p>
        </div>
      </div>
    </div>
  );
};
export default SimilarPokemon;
