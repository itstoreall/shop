import useStyles from './NavBarStyles';
import PropTypes from 'prop-types';

const NavLink = ({ path, label }) => {
  const { pathname } = window.location;
  const isActive = pathname === path;

  const s = useStyles(isActive);

  return (
    // Логика isActive link в стилях
    <a className={s.link} href={path}>
      {label}
    </a>
  );
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;

/**
 * Before isActive
 * 
 * Аналог работы библиотеки classes 
 * 
import useStyles from './NavBarStyles';

const NavLink = ({ path, label }) => {
  const { pathname } = window.location;

  const s = useStyles();

  return (
    <a
      className={[s.link, pathname === path ? s.activeLink : ''].join(' ')}
      href={path}
    >
      {label}
    </a>
  );
};

export default NavLink;
 *
 */
