import NavLink from './NavLink';
import useStyles from './NavBarStyles';

const NavBar = () => {
  const s = useStyles();

  return (
    <div className={s.NavBar}>
      <NavLink path={'/'} label={'Home'} />
      <NavLink path={'/products'} label={'Products'} />
      <NavLink path={'/cart'} label={'Cart'} />
    </div>
  );
};

export default NavBar;
