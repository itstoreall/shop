import useStyles from './NavBarStyles';

const NavBar = () => {
  const s = useStyles();

  return (
    <div className={s.NavBar}>
      <a className={s.link} href="/">
        Home
      </a>
      <a className={s.link} href="products">
        Products
      </a>
      <a className={s.link} href="cart">
        Cart
      </a>
    </div>
  );
};

export default NavBar;
