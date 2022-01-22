import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";

const CardListType = () => {
  const [data, setData] = useState([]);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/type");
      setData(res.data.results);
    };
    fetchData();
  }, []);

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
    return <Loader />;
  } else {
    return (
      <>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Liste type des pokemons
          </h1>
        </div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((data, index) => (
                <NavLink
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  key={`index-${index}`}
                  to={`/listype/${data.name}`}
                >
                  {data.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CardListType;
