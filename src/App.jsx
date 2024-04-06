import { Routes } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Routes path="/" element={<div>this is ana seyfe</div>} />
        <Routes path="/about" />
        <Routes path="/calculator" element={<Calculator />} />


      </Routes>
    </>
  )
}

export default App
