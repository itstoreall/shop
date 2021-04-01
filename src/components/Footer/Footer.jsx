import useStyles from './FooterStyles';

const Footer = () => {
  const s = useStyles();

  return (
    <>
      <div className={s.Footer}>
        <div className={s.container}>
          <p>my Shop</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
