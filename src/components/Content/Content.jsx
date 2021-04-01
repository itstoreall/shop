import HomeView from '../../views/HomeView';
import ProductView from '../../views/ProductView';
import CartView from '../../views/CartView';
import useStyles from './ContentStyles';

const Content = () => {
  const { pathname } = window.location;
  const s = useStyles();

  return (
    <section className={s.Content}>
      <p>{pathname}</p>
      {pathname === '/' && <HomeView />}
      {pathname === '/products' && <ProductView />}
      {pathname === '/cart' && <CartView />}
    </section>
  );
};

export default Content;

/**
 * Content в зависимости от адреса отображает
 * разные компоненты
 */
