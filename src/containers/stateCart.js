import { connect } from 'react-redux';
import { listLineItems } from '../ducks/cart';
import ListLineItems from '../components/ListLineItems';

const mapStateToProps = (state, ownProps) => ({
  itemList: listLineItems(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLineItems);

export default StateCart;
