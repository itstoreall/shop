import React, { Suspense } from 'react';
import { routes } from '../../routes';
import { Switch, Route } from 'react-router-dom';
import useStyles from './ContentStyles';
import NotFoundView from '../../views/NotFoundView';

const Content = () => {
  const s = useStyles();

  return (
    <section className={s.Content}>
      <Suspense fallback={<span>Loading...</span>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route path={path} exact={exact} component={Component} key={path} />
          ))}
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </section>
  );
};

export default Content;
