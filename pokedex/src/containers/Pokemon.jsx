import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import Loader from "../components/Loader";

const PokeCard = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
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
    return <Loader />;
  } else {
    return (
      <>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {data.name} #{data.id}
          </h1>
        </div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Section {...data}></Section>
          </div>
        </div>
      </>
    );
  }
};

export default PokeCard;
