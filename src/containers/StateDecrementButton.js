import { connect } from 'react-redux';
import Button from '../components/Button';
import { decrementQuantity } from '../ducks/cart';

const mapStateToProps = (state, ownProps) => ({
  disable: ownProps.product.quantity > 1 ? this.disable : true
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(decrementQuantity(ownProps.product.id))
});

const decrementQuantityButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default decrementQuantityButton;
