import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as Logo} from "../assets/blog.svg"; 
export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
 }, []);
 
    return ( 
        <div className={scroll? "nav-container nav-shadow":"nav-container"}>
            <div className="navbar">
                <div className="logo">
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <nav>
                    <NavLink 
                    className={({isActive}) => isActive ? "active-link" : null} 
                    to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => isActive ? "active-link" : null} 
                    to='/authors'
                    >
                        Authors
                    </NavLink>
                    <NavLink 
                    className={({isActive}) => isActive ? "active-link" : null} 
                    to='/admin'
                    >
                        Admin
                    </NavLink>
                </nav>
            </div>
        </div>
        
    );
}