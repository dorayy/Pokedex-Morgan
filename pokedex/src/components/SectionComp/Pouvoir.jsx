import React from "react";
let i = 0;

function Pouvoir(data) {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        Abilitées & Compétences
      </h1>
      {/* Ici on liste les abilitées de chaque pokémon */}
      <p className="text-gray-500 font-semibold dark:text-gray-300">
        Abilitées :
      </p>

      {data.abilities?.map((ability) => (
        <React.Fragment key={ability.slot}>
          <ul className="list-disc list-inside ...">
            <li className="text-gray-500 font-normal dark:text-gray-300">
              {ability.ability.name}
            </li>
          </ul>
        </React.Fragment>
      ))}
      {/* Ici on liste uniquement 5 compétences pour éviter de mettre toutes les compétences */}
      <p className="text-gray-500 font-semibold dark:text-gray-300">
        Compétences :
      </p>

      {data.moves?.slice(0, 5).map((move) => (
        <React.Fragment key={i++}>
          <ul className="list-disc list-inside ...">
            <li className="text-gray-500 font-normal dark:text-gray-300">
              {move.move.name}
            </li>
          </ul>
        </React.Fragment>
      ))}
    </>
  );
}

export default Pouvoir;
