import { connect } from 'react-redux';
import { incrementQuantity } from '../ducks/cart';
import AddButton from '../components/AddButton';
import { getLineItem, listLineItems } from '../ducks/cart';
import ListLineItems from '../components/ListLineItems';

//s'ha de fer un nou stateCart per connectar amb la cart i també una altre per els productes
const mapStateToProps = (state, ownProps) => ({
  itemList: listLineItems(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateCart = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLineItems);

export default StateCart;
