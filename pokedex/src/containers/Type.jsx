import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const imgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const noImgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

const Type = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/${slug}`);
        setData(res.data.pokemon);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise((r) => setTimeout(r, 1000));
        setLoader((loading) => !loading);
      } catch (error) {
        console.error(error.message);
      }
    };
    loadData();
  }, []);
  if (loader) {
    return (
      <div className="loading">
        <img src="http://a.top4top.net/p_1990j031.gif" alt="Loading" />
      </div>
    );
  } else {
    return (
      <>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Type : {slug}</h1>
        </div>

        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((data, index) => (
                <div key={index} className="group relative">
                  <h3 className="text-sm text-gray-700">
                    <NavLink to={`/pokemons/${data.pokemon.name}`}>
                      {data.pokemon.name.toUpperCase()}
                    </NavLink>
                  </h3>

                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={imgPoke + data.pokemon.url.split("/")[6] + ".png"}
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
  }
};

export default Type;
