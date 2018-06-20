import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';
import { getProduct } from '../ducks/products';
import { listLineItems } from '../ducks/cart';

const mapStateToProps = (state, ownProps) => ({
  productDetail: getProduct(state, { productId: ownProps.itemId }),
  productDetailCart: listLineItems(state).find(
    lineItem => lineItem.id === ownProps.itemId
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

export default StateProductDetail;
