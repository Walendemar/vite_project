import { NavLink } from 'react-router';

import '@widgets/navbar/NavBar.css';

const NavBar = () => {
  return (
    <div className="flex nav-menu">
      <NavLink className="nav-link" to="/">
        Main
      </NavLink>
      <NavLink className="nav-link" to="/settings">
        Settings
      </NavLink>
    </div>
  );
};

export default NavBar;
