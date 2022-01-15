import React from "react";

function General(data) {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        Généralités
      </h1>
      <p className="text-gray-500 font-semibold dark:text-gray-300">
        Taille :{" "}
        <span className="text-gray-500 dark:text-gray-300">
          {data.height / 10} M
        </span>
      </p>
      <p className="text-gray-500 font-semibold dark:text-gray-300">
        Poids :{" "}
        <span className="text-gray-500 dark:text-gray-300">
          {data.weight / 10} KG
        </span>
      </p>
      <p className="text-gray-500 font-semibold dark:text-gray-300">
        Expérience de Base :{" "}
        <span className="text-gray-500 dark:text-gray-300">
          {data.base_experience}
        </span>
      </p>
    </>
  );
}

export default General;
