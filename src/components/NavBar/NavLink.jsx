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
