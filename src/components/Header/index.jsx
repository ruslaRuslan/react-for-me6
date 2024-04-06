import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          if (isActive) {
            return {
              color: "red",
            };
          }
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          if (isActive) {
            return {
              color: "red",
            };
          }
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          if (isActive) {
            return {
              color: "red",
            };
          }
        }}
        to="/calculator"
      >
        calculator
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          if (isActive) {
            return {
              color: "red",
            };
          }
        }}
        to="/Users"
      >
        Users
      </NavLink>
    </nav>
  );
}

export default Header;
