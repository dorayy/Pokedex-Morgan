import { Helmet } from "react-helmet-async";
import CardListType from "../containers/CardListType";

const List = () => {
  return (
    <>
      <Helmet>
        <title>List of pokemon</title>
      </Helmet>
      <main className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Liste type des pokemons
          </h1>
        </div>
        <CardListType />
      </main>
    </>
  );
};

export default List;
