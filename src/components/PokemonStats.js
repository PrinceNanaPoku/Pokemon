import React from "react";
const PokemonStat = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-center">Stats</h2>
      <div className="grid grid-cols-3 bg-slate-100 py-3 mx-7 text-center mb-1">
        <p>HP</p>
        <div className="relative border rounded-none bg-slate-400 my-2 w-full z-0">
          <div className="absolute border rounded-none bg-pink-400 py-1 w-1/3 z-50"></div>
        </div>
        <span className="font-bold">60</span>
        <p>Attack</p>
        <div className="relative border rounded-none bg-slate-400 my-2 w-full z-0">
          <div className="absolute border rounded-none bg-pink-400 py-1 w-1/3 z-50"></div>
        </div>
        <span className="font-bold ">62</span>
        <p>Defense</p>
        <div className="relative border rounded-none bg-slate-400 my-2 w-full z-0">
          <div className="absolute border rounded-none bg-pink-400 py-1 w-1/3 z-50"></div>
        </div>
        <span className="font-bold">63</span>
        <p>Special Attack</p>
        <div className="relative border rounded-none bg-slate-400 my-2 w-full z-0">
          <div className="absolute border rounded-none bg-pink-400 py-1 w-1/3 z-50"></div>
        </div>
        <span className="font-bold">80</span>
        <p>Special Defense</p>
        <div className="relative border rounded-none bg-slate-400 my-2 w-full z-0">
          <div className="absolute border rounded-none bg-pink-400 py-1 w-1/3 z-50"></div>
        </div>
        <span className="font-bold">80</span>
        <p>Speed</p>
        <div className="relative border rounded-none bg-slate-400 my-2 w-full z-0">
          <div className="absolute border rounded-none bg-pink-400 py-1 w-1/3 z-50"></div>
        </div>
        <span className="font-bold">60</span>
      </div>
    </div>
  );
};
export default PokemonStat;
