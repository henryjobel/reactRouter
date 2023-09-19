
import {Link} from "react-router-dom"

import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">contact Us</Link>
                <Link to="/about">About us</Link>
                <Link to="/users">Our Users</Link>
               
            </nav>
        </div>
    );
};

export default Header;