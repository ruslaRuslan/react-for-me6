import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";
import NavLinkByRuslan from "../NavLinkByRuslan";
import { DarkModeContext } from "../../context/DarkModeContext";

function Header() {
  const { ad } = useContext(FN_Context);
  const [emoji, handleModeChange] = useContext(DarkModeContext);
  return (
    <nav>
<<<<<<< HEAD
=======
      <p style={{ margin: 0 }}>xos gelipsen {ad}</p>
      <button onClick={handleModeChange}> {emoji} </button>
>>>>>>> 6a62149d7bd3a77276f8f225076e9a019db610cb
      <NavLinkByRuslan title="Home" to="/" />
      <NavLinkByRuslan title="About" to="/about" />
      <NavLinkByRuslan title="calculator" to="/calculator" />
      <NavLinkByRuslan title="Users" to="/users" />
    </nav>
  );
}

export default Header;