import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { listProducts } from '../ducks/products';

const mapStateToProps = state => ({ products: listProducts(state) });

const StateProductList = connect(mapStateToProps)(ProductList);

export default StateProductList;
