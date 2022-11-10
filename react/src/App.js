import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  
import About from "./components/About.jsx";
import News from "./components/News.jsx";
import World from "./components/World.jsx";
import Health from "./components/Health.jsx";
import Kindness from "./components/Kindness.jsx";
import Technology from "./components/Technology.jsx";
import Animals from "./components/Animals.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}>
            <Route index element={<About />} />
        </Route>
        <Route path="/about" element={<About/>}>
            <Route index element={<About />} />
        </Route>
        <Route path="/news" element={<News />}>
            <Route index element={<News />} />
        </Route>
        <Route path="/world" element={<World />}>
            <Route index element={<World />} />
        </Route>
        <Route path="/health" element={<Health />}>
            <Route index element={<Health />} />
        </Route>
        <Route path="/kindness" element={<Kindness />}>
            <Route index element={<Kindness />} />
        </Route>
        <Route path="/technology" element={<Technology />}>
            <Route index element={<Technology />} />
        </Route>
        <Route path="/animals" element={<Animals />}>
            <Route index element={<Animals />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
  
export default App;