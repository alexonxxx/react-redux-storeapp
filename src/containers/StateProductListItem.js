import { connect } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
import { listProducts } from '../ducks/products';

const mapStateToProps = state => ({ propName: listProducts(state) });

const StateProductListItem = connect(mapStateToProps)(ProductListItem);

export default StateProductListItem;
