import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MultiAPI</Link>
            </div>
            <div className="navbar-links">
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active api1-link' : 'api1-link'}
                >
                    JSONPlaceholder (Users)
                </Link>
                <Link
                    to="/page-two"
                    className={location.pathname === '/page-two' ? 'active api2-link' : 'api2-link'}
                >
                    PokéAPI (Characters)
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
