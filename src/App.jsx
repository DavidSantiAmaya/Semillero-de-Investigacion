import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./sections/NavBar";
import Titulo1 from "./sections/Titulo1";
import Jason from "./sections/Jason";
import Titulo2 from "./sections/Titulo2";
import Lucia from "./sections/Lucia";
import Personajes from "./sections/Personajes";

const Home = () => {
  return (
    <main>
      <Titulo1 />
      <Jason />
      <Titulo2 />
      <Lucia />
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;