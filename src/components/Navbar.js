import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to='/'>
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M30.5,57H4a1,1,0,0,1-1-1V7A1,1,0,0,1,4,6H29.5a13.5,13.5,0,0,1,6.67,25.24A13.5,13.5,0,0,1,30.5,57ZM5,55H30.5a11.5,11.5,0,0,0,2.73-22.68,1,1,0,0,1-.07-1.92A11.48,11.48,0,0,0,41,19.5,11.51,11.51,0,0,0,29.5,8H5Z"/><path d="M53.17,25.45a1,1,0,0,1-.88-.53l-1.9-3.52a1,1,0,0,1,.4-1.35,7.9,7.9,0,0,0,2-1.51A6,6,0,1,1,61,13a14,14,0,0,1-7.36,12.33A1,1,0,0,1,53.17,25.45Zm-.57-4.16,1,1.77A12,12,0,0,0,59,13a4,4,0,1,0-4.4,4,1,1,0,0,1,.73,1.55A10.14,10.14,0,0,1,52.6,21.29Z"/><path d="M26.5,29H12a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H26.5a7.5,7.5,0,0,1,0,15ZM13,27H26.5a5.5,5.5,0,0,0,0-11H13Z"/><path d="M26.5,50H12a1,1,0,0,1-1-1V36a1,1,0,0,1,1-1H26.5a7.5,7.5,0,0,1,0,15ZM13,48H26.5a5.5,5.5,0,0,0,0-11H13Z"/></svg>
                </Link>
            </div>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to='/authors'>Authors</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to='/admin'>Admin</NavLink>
            </nav>
            
        </div>
    );
}