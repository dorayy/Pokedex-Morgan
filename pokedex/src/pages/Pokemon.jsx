import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import PokemonDetail from "../containers/Pokemon";
const Pokemon = () => {
  let { slug } = useParams();

  return (
    <>
      {/* <Helmet>
        <title>Pokemon</title>
      </Helmet> */}
      <main className="bg-white shadow">
        <PokemonDetail></PokemonDetail>
      </main>
    </>
  );
};

export default Pokemon;
