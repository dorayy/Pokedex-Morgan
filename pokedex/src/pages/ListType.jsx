import { Helmet } from "react-helmet-async";
import CardListType from "../containers/CardListType";

const List = () => {
  return (
    <>
      <Helmet>
        <title>List of pokemon</title>
      </Helmet>
      <main className="bg-white shadow">
        <CardListType />
      </main>
    </>
  );
};

export default List;
