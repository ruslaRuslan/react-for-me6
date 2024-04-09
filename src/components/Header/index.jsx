import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";
import NavLinkByRuslan from "../NavLinkByRuslan";
import { DarkModeContext } from "../../context/DarkModeContext";

function Header() {
  const {ad}= useContext(FN_Context)
  const [mode, setMode] = useContext(DarkModeContext)
  return (
    <nav>
      <p>xos gelipsen {ad}</p>
      <button
          onClick={() => {
            setMode(mode === 'dark' ? 'light' : 'dark')
          }}
        >
          {mode === 'dark' ? "☀" : "🥮"}
        </button>
      <NavLinkByRuslan title="Home" to="/" />
      <NavLinkByRuslan title="About" to="/about" />
      <NavLinkByRuslan title="calculator" to="/calculator" />
      <NavLinkByRuslan title="Users" to="/users" />
    </nav>
  );
}

export default Header;
