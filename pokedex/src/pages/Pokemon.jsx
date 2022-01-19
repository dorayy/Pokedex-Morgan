import { Helmet } from "react-helmet-async";
import PokemonDetail from "../containers/Pokemon";
const Pokemon = () => {
  return (
    <>
      <Helmet>
        <title>Pokemon</title>
      </Helmet>

      <main className="bg-white shadow">
        <PokemonDetail></PokemonDetail>
      </main>
    </>
  );
};

export default Pokemon;
