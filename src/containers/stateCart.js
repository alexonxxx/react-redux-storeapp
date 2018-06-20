import { connect } from 'react-redux';
import { listLineItems } from '../ducks/cart';
import Cart from '../components/Cart';

const mapStateToProps = (state, ownProps) => ({
  itemsList: listLineItems(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default StateCart;
