import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import CartView from './views/CartView';
import ReviewView from './views/ReviewView';
import ProductDetailsView from './views/ProductDetailsView';

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
