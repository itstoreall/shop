import useStyles from './HeaderStyles';

const Header = () => {
  const s = useStyles();
  return (
    <>
      <div className={s.Header}>
        <div className={s.container}>
          <p>my Shop</p>
        </div>
      </div>
    </>
  );
};

export default Header;
