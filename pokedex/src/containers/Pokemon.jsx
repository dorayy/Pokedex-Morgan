import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section";

const noImgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

const PokeCard = () => {
  const [data, setData] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${slug}`
        );
        setData(res.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Pokemon {data.height}
        </h1>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div key="" className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={data.sprites?.front_default}
                  alt={noImgPoke}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
            </div>
          </div>

          <Section></Section>
        </div>
      </div>
    </>
  );
};

export default PokeCard;
