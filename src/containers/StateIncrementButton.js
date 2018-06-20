import { connect } from 'react-redux';
import ButtonAdd from '../components/ButtonAdd';
import { incrementQuantity } from '../ducks/cart';
import getLineItem from '../ducks/cart/getLineItem';

const mapStateToProps = (state, ownProps) => ({
  getLineItem: getLineItem(state, { productId: ownProps.product.id })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(incrementQuantity(ownProps.product.id))
});

const IncrementQuantityButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAdd);

export default IncrementQuantityButton;
