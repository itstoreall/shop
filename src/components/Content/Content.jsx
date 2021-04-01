import { routes } from '../../routes';
import useStyles from './ContentStyles';

const Content = () => {
  const { pathname } = window.location;
  const s = useStyles();

  return (
    <section className={s.Content}>
      {routes.map(
        ({ path, component: Component }) =>
          pathname === path && <Component key={path} />,
      )}
    </section>
  );
};

export default Content;

/**
 * Content в зависимости от адреса отображает
 * разные компоненты
 */
