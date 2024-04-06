import { NavLink } from "react-router-dom";

const style = {
  color: "red",
  backgroundColor: "#000",
};

const NavLinkByRuslan = ({ title, to }) => {
  return (
    <>
      <NavLink style={({ isActive }) => (isActive ? style : null)} to={to}>
        {title}
      </NavLink>
    </>
  );
};

export default NavLinkByRuslan;
