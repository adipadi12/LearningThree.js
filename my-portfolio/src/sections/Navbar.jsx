import React  from "react";
import { useState } from "react";

const NavItems = () => {
  return (
    <ul className = "navul">
      {["home", "about", "work", "contact"].map((item, index) => (
        <li key={index} className = "navli">
          <a href="/" className = "navli_a">
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
  
      <header className = "fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/"className = "text-neutral-400 hover:text-white font-bold text-2xl transition-colors">
            Aditya Jha
            </a>

            <button onClick={toggleMenu} className="text-neutral-400 hover:text-white font-outlline text-2xl focus:outline-none 
            sm:hidden flex" aria-label="Toggle menu">
              <img src={isOpen ? "public/assets/close.svg" : "public/assets/menu.svg"}  alt="toggle" className="w-8 h-8 " />
            </button>
            <nav className="sm:flex hidden"></nav>
            <NavItems/>
          </div>
        </div>
      </header>
  
  );
};

export default Navbar