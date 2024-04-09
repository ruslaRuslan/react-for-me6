import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext("light");

const DarkModeContextComponent = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMode(localStorage.getItem("mode"));
  }, []);

  const handleModeChange = () => {
    let newMode = (mode === "dark" ? "light" : "dark")
    setMode(newMode);
    localStorage.setItem('mode', newMode)
  };

  return (
    <div className={mode === "dark" ? "darkContainer" : ""}>
      <DarkModeContext.Provider value={[mode, handleModeChange]}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};
export default DarkModeContextComponent;
