import { createContext } from "react";

export const DarkModeContext = createContext("light");

const DarkModeContext = () => {
  return (
    <>
      <DarkModeContext.Provider value="">

      </DarkModeContext.Provider>
    </>
  );
};
export default DarkModeContext;
