import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    
    <nav>
        <div className="logo">AURORA</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                <Link to="hero" spy={true} smooth={true} duration={500}>
                    HOME
                </Link>
                <Link to="services" spy={true} smooth={true} duration={800}>
                    SERVICES
                </Link>
                <Link to="about" spy={true} smooth={true} duration={1100}>
                    ABOUT
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={1300}>
                    CONTACT
                </Link>
            </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
        </div>
    </nav>
    
  );
};

export default Navbar;