import { lazy } from 'react';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: 'Home' */),
);
const ProductView = lazy(() =>
  import('./views/ProductView' /* webpackChunkName: 'Product' */),
);
const ProductDetailsView = lazy(() =>
  import('./views/ProductDetailsView' /* webpackChunkName: 'ProductDetails' */),
);
const CartView = lazy(() =>
  import('./views/CartView' /* webpackChunkName: 'Cart' */),
);
const ReviewView = lazy(() =>
  import('./views/ReviewView' /* webpackChunkName: 'Review' */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomeView,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/products/:id',
    label: 'Product Details',
    component: ProductDetailsView,
    exact: false,
    showInMenu: false,
  },
  {
    path: '/products',
    label: 'Product',
    component: ProductView,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/cart',
    label: 'Cart',
    component: CartView,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/reviews',
    label: 'Reviews',
    component: ReviewView,
    exact: false,
    showInMenu: true,
  },
];
