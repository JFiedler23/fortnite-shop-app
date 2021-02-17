import { useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
import { Link } from 'react-router-dom';

function Navbar(){
    const { theme, toggleTheme } = useContext(DarkModeContext);

    return(
        <nav className="nav">
            <h2 id="nav-logo">
                <Link style={{color: theme === "light" ? "black" : "white"}} to="/">BR Shop</Link>
            </h2>
            <div className="nav-items">
                <a onClick={toggleTheme} id="dark-mode-icon" className="material-icons nav-item">dark_mode
                </a>
            </div>
        </nav>
    )
}

export default Navbar;