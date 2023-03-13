import Home from "./pages/Home";
import Motkraft from "./pages/Motkraft";
import Layout from "./pages/Layout";
import About from "./pages/About"
import NavBar from "./components/NavBar";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="motkraft" element={<Motkraft />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;
