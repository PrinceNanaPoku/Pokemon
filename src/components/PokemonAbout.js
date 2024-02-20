import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, fa1, faCircle } from "@fortawesome/free-solid-svg-icons";

const PokemonAbout = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mt-4 mb-1 text-center">About</h2>
      <div className="grid grid-cols-2 bg-slate-100 py-5 mx-7 text-center ">
        <p>Height</p>
        <span className="font-bold">1.0m</span>
        <p>Weight </p>
        <span className="font-bold "> 15.0kg </span>
        <p>Abilities</p>
        <span className="font-bold">overgrow</span>
        <br />
        <span className="font-bold ml-22">chlorophyll</span>
      </div>
    </div>
  );
};
export default PokemonAbout;
