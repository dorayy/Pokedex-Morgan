import { Helmet } from "react-helmet";
import TypePoke from "../containers/Type";

const Type = () => {
  return (
    <>
      {/* <Helmet>
        <title>Pokemon</title>
      </Helmet> */}
      <main className="bg-white shadow">
        <TypePoke></TypePoke>
      </main>
    </>
  );
};

export default Type;
