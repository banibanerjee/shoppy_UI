import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({ containerStyles }) => {

  const linkStyle = ({ isActive }) =>
    `relative flexCenter gap-x-1 pb-1 medium-15 transition-all
     ${isActive ? "after:w-full after:bg-black" : "after:w-0 after:bg-transparent"}
     after:absolute after:h-[2px] after:left-0 after:bottom-0 after:transition-all after:duration-300`;

  return (
    <nav className={`${containerStyles}`}>
      <NavLink to="/" className={linkStyle}>
        <MdHomeFilled /> Home
      </NavLink>

      <NavLink to="/mens" className={linkStyle}>
        <MdCategory /> Men's
      </NavLink>

      <NavLink to="/womens" className={linkStyle}>
        <MdShop2 /> Women's
      </NavLink>

      <NavLink to="/kids" className={linkStyle}>
        <MdContacts /> Kid's
      </NavLink>
    </nav>
  );
};

export default Navbar;
