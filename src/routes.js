import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import CartView from './views/CartView';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomeView,
  },
  {
    path: '/products',
    label: 'Product',
    component: ProductView,
  },
  {
    path: '/cart',
    label: 'Cart',
    component: CartView,
  },
];
