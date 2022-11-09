import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  
import About from "./components/About.jsx";
import News from "./components/News.jsx";

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
      </Routes>
    </BrowserRouter>
    </>
  );
}
  
export default App;