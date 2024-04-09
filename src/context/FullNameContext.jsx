import { createContext } from "react";

const FN_Context = createContext({ ad: "", email: "" });

const data = {ad:'Ruslan', email:'ruslan@gmail.com'}

const FullNameContext = () => {
    return(
        <FN_Context.Provider value={data}>

        </FN_Context.Provider>
    )
};
export default FullNameContext;