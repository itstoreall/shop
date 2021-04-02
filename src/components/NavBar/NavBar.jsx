import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';
import useStyles from './NavBarStyles';

const NavBar = () => {
  const s = useStyles();

  return (
    <div className={s.NavBar}>
      {routes.map(({ path, label, showInMenu }) =>
        showInMenu ? (
          <NavLink
            key={path}
            to={path}
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            {label}
          </NavLink>
        ) : null,
      )}
    </div>
  );
};

export default NavBar;
