import { useState } from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#!" },
    { name: "About Us", href: "#!" },
    { name: "Services", href: "#!" },
    { name: "Contact Us", href: "#!" },
    { name: "Some Link", href: "#!" },
  ];

  const navLinks = links.map(link => (
    <a
      className="p-4 no-underline text-xl block text-white md:text-primary md:text-lg"
      onClick={() => setOpen(false)}
      key={link.name}
      href={link.href}
    >
      {link.name}
    </a>
  ));

  return (
    <header>
      <div className="flex content-evenly items-center mx-2">
        <div>
          <img
            className="w-40 md:w-80"
            src={Logo}
            alt="Super Delta Heating & Cooling"
          />
        </div>
        <nav className="hidden md:flex md:content-around">{navLinks}</nav>

        <div
          onClick={() => setOpen(!open)}
          className={`${
            open && "hidden"
          } absolute right-2 text-xl text-primary md:hidden`}
        >
          &#9776;
        </div>
      </div>

      {open && (
        <nav
          className={`w-full ${
            !open ? "h-0" : "h-full"
          } fixed z-50 top-0 left-0 overflow-x-hidden bg-primary bg-opacity-70 md:hidden`}
        >
          <div
            className="absolute top-2 right-2 text-4xl text-white"
            onClick={() => setOpen(false)}
          >
            &times;
          </div>
          <div className="relative w-full text-center top-1/4">{navLinks}</div>
        </nav>
      )}

      <div className="bg-primary text-white text-center">
        <a href="tel:5555555555">(555) 555-5555</a>
      </div>
    </header>
  );
};

export default Header;
