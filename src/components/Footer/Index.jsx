import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";

const Footer = ({}) => {


const data = useContext(FN_Context)
console.log(data);


  return (
    <div style={{ backgroundColor: "red", margin: "20px 0" }}>
    footer
    </div>
  )
};

export default Footer;
