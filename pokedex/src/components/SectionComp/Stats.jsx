import React from "react";
let i = 0;
function Stats(data) {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        Statistiques
      </h1>

      {/* Ici on liste les abilitées de chaque pokémon */}

      {data.stats?.map((stat) => (
        <React.Fragment key={i++}>
          <ul className=" list-inside ...">
            <li className="text-gray-500 font-normal dark:text-gray-300">
              <span
                style={{ textTransform: "uppercase" }}
                className="text-red-500"
              >
                {stat.stat.name} :{" "}
              </span>
              <span className="text-gray-500">{stat.base_stat}</span>
            </li>
          </ul>
        </React.Fragment>
      ))}
    </>
  );
}

export default Stats;
