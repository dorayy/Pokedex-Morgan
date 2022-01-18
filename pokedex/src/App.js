import Nav from "./components/Nav";
import Home from "./pages/Home";
import List from "./pages/List";
import ListType from "./pages/ListType";
import Pokemon from "./pages/Pokemon";
import Type from "./pages/Type";
import Favoris from "./pages/Favoris";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemons" element={<List />} />
        <Route path="listype" element={<ListType />} />
        <Route path="listype/:slug" element={<Type />} />
        <Route path="favoris" element={<Favoris />} />
        <Route path="pokemons/:slug" element={<Pokemon />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
