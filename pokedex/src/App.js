import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import List from "./pages/List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
