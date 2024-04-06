import { Route, Routes } from "react-router";
import Calculator from "./components/Calculator";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
