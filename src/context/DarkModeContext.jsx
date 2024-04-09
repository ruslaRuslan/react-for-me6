import { createContext, useState } from "react";

export const DarkModeContext = createContext("light");

const DarkModeContextComponent = ({ children }) => {
  const [mode, setMode] = useState("light");

  

  return (
    <div className={mode === 'dark' ? 'darkContainer' : ''}>
      <DarkModeContext.Provider value={[mode, setMode]}>
        {children}
        </DarkModeContext.Provider>
    </div>
  )
}
export default DarkModeContextComponent;
