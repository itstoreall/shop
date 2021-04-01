import useStyles from './HeaderStyles';

const Header = () => {
  const s = useStyles();
  return (
    <>
      <div className={s.Header}>
        <div className="container Header">
          <p className={s.logo}>my Shop</p>
          <p className={s.tel}>Phone-number</p>
        </div>
      </div>
    </>
  );
};

export default Header;
