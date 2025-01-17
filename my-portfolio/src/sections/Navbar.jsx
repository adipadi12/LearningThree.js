import React  from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
  
      <header className = "fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/"className = "text-neutral-400 hover:text-white font-bold text-2xl transition-colors">
            Aditya Jha
            </a>

            <button>
              <img src={"assets/menubar.svg"}  alt="toggle" className="w-8 h-8 " />
            </button>
          </div>
        </div>
      </header>
  
  );
};

export default Navbar