import { Route, Routes } from "react-router";
import Calculator from "./components/Calculator";
import Home from "./components/page/Home";
import About from "./components/page/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />


      </Routes>
    </>
  )
}

export default App
