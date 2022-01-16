import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const imgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const noImgPoke =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

const CardListType = () => {
  const [data, setData] = useState([]);
  const [dataUrl, setDataUrl] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        res.data.results.map((data) => {
          let arr = [];
          arr.push({ id: data.url.split("/")[6], url: data.url });
          setDataUrl(arr);
        });
        setData(res.data.results);
      } catch (error) {
        console.error(error.message);
      }
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
    return (
      <div className="loading">
        <img src="http://a.top4top.net/p_1990j031.gif" alt="Loading" />
      </div>
    );
  } else {
    return (
      <>
        {dataUrl.map((r) => {
          const fetchData = () => {
            axios
              .get(`${r.url}`)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          };
        })}

        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((data, index) => (
                <div key={index} className="group relative">
                  <h3 className="text-sm text-gray-700">
                    <NavLink to={`/pokemons/${data.name}`}>
                      {data.name.toUpperCase()}
                    </NavLink>
                  </h3>

                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={imgPoke + data.url.split("/")[6] + ".png"}
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

export default CardListType;