import useStyles from './FooterStyles';

const Footer = () => {
  const s = useStyles();

  return (
    <>
      <div className={s.Footer}>
        <div className="container Footer">
          <p className={s.logo}>my Shop</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
