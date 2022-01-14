import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import List from "./pages/List";
import Pokemon from "./pages/Pokemon";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemons" element={<List />} />
        <Route path="pokemons/:slug" element={<Pokemon />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
