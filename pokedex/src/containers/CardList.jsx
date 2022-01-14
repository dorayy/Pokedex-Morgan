import axios from "axios";
import React, { useEffect, useState } from "react";

const imgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const noImgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        setData(data.data.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((data, index) => (
              <div key={index} className="group relative">
                <h3 className="text-sm text-gray-700">
                  <a href={data.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {data.name}
                  </a>
                </h3>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={imgPoke + (index + 1) + ".png"}
                    alt={noImgPoke}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
