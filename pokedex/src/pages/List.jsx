import { Helmet } from "react-helmet-async";
import CardList from "../containers/CardList";

const List = () => {
  return (
    <>
      <Helmet>
        <title>List of pokemon</title>
      </Helmet>
      <main className="bg-white shadow">
        <CardList />
      </main>
    </>
  );
};

export default List;
