import { NavLink } from "react-router-dom";

const NavLinkByRuslan = ({title, to}) => {
  return (
    <>
    
    <NavLink
        style={({ isActive }) => {
          if (isActive) {
            return {
              color: "red",
              backgroundColor: '#000'
            };
          }
        }}
        to={to}
      >
    {title}
      </NavLink>
    </>
  )
};

export default NavLinkByRuslan;
