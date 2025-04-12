import { NavLink } from 'react-router';

import '@widgets/navbar/NavBar.css';

const NavBar = () => {
  return (
    <div className="flex gap-sm nav-menu">
      <NavLink className="link" to="/">
        Main
      </NavLink>
      <NavLink className="link" to="/settings">
        Settings
      </NavLink>
    </div>
  );
};

export default NavBar;
