import { NavLink } from "react-router-dom";
import './MainMenu.scss';

function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
        </nav>
    );
}

export default MainMenu;