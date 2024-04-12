import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";
import NavLinkByRuslan from "../NavLinkByRuslan";
// import { DarkModeContext } from "../../context/DarkModeContext";

function Header() {
  return (
    <nav>

<NavLinkByRuslan title="home" to="/" />
<NavLinkByRuslan title="about" to="/about" />
<NavLinkByRuslan title="contact" to="/contact" />


    </nav>
  );
}

export default Header;