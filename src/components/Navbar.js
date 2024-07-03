import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo} from "../assets/blog.svg"; 
export default function Navbar() {
    return (
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
    );
}