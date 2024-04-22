import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <header className="h-20 w-full bg-neutral-100 shadow-md">
      <div className="h-full p-5 nav-wrapper flex items-center justify-between">
        <img className="logo" src={logo} alt="Company logo" />
        <HamburgerButton
          isOpen={hamburgerMenuIsOpen}
          setOpen={setHamburgerMenuIsOpen}
        />
        <nav className="hidden sm:block">
          <ul className="flex items-center justify-between">
            <li className="mx-2">
              <NavLink activeclassName={"bg-black"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="mx-2">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {hamburgerMenuIsOpen && (
        <nav className="block sm:hidden z-50 absolute w-full bg-neutral-100 shadow-md border-t">
          <ul className="p-5 flex flex-col items-center justify-between">
            <li className="my-2">
              <NavLink activeClassName={"bg-black"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="my-2">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="my-2">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
