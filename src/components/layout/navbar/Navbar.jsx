import { useState } from "react"
import "./navbar.scss"

import MenuIcon from "../../ui/menu-icon/MenuIcon"

import Logo from "../../ui/logo/Logo"


export default function Navbar () {
    
    // ---------------------------
    // [STATE]
    // ---------------------------

    const [isOpen, setIsOpen] = useState(false)

    // ---------------------------
    // [FUNCTIONS]
    // ---------------------------      
    
    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }


    return (
        <div className="grid navbar">
            <header className="navbar__header">
                <div className="navbar__main">

                    {/* {HAMBURGER BUTTON} */}
                    <button
                        className="navbar__toggle"
                        onClick={toggleMenu}
                    >
                        <MenuIcon />    
                    </button>
                    
                    <Logo />

                    <div className="navbar__counter-right-links">
                        <ul className="navbar__links-desktop">
                            <li><a href=""> <span>Home</span></a></li>
                            <li><a href=""> <span>About</span></a></li>
                            <li><a href=""> <span>Projects</span></a></li>
                            <li><a href=""> <span>Insight</span></a></li>                  
                        </ul>

                        <button
                            className="navbar__button--dark"
                        >
                            Get in touch
                        </button>
                    </div>
                    {/* DESKTOP LINKS */}

                </div>
            </header>
        </div>

    )


}