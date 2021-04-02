import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import ProductList from './ProductList';
import { getShopItems, getCartItems } from '../../redux/shop/operations';
import useStyles from './shop.styles';

const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    dispatch(getShopItems());
    dispatch(getCartItems());
  }, []); // eslint-disable-line

  return (
    <div className={classes.shop}>
      <Header />
      <ProductList />
    </div>
  );
};

export default Shop;
