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
          className={location.pathname === '/' ? 'active' : ''}
        >
          API 1 (JSONPlaceholder)
        </Link>
        <Link 
          to="/page-two" 
          className={location.pathname === '/page-two' ? 'active' : ''}
        >
          API 2 (Rick & Morty)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
