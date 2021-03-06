import { Helmet } from "react-helmet-async";
import TypePoke from "../containers/Type";

const Type = () => {
  return (
    <>
      <Helmet>
        <title>Type Pokemon</title>
      </Helmet>
      <main className="bg-white shadow">
        <TypePoke></TypePoke>
      </main>
    </>
  );
};

export default Type;
