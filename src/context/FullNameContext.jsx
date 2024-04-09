import { createContext } from "react";

const FN_Context = createContext({ ad: "", email: "" });

const FullNameContext = () => {
    return(
        <FN_Context.Provider value={{ad:'Ruslan', email:'ruslan@gmail.com'}}>

        </FN_Context.Provider>
    )
};
