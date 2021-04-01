import NavLink from './NavLink';
import { routes } from '../../routes';
import useStyles from './NavBarStyles';

const NavBar = () => {
  const s = useStyles();

  return (
    <div className={s.NavBar}>
      {routes.map(({ path, label }) => (
        <NavLink key={path} path={path} label={label} />
      ))}
    </div>
  );
};

export default NavBar;
