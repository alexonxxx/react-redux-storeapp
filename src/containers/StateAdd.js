import { connect } from 'react-redux';
import { incrementQuantity } from '../ducks/cart';
import AddButton from '../components/AddButton';
import { getLineItem } from '../ducks/cart';

//s'ha de fer un nou stateCart per connectar amb la cart i també una altre per els productes
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(incrementQuantity(ownProps.product.id))
});

const StateAdd = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);

export default StateAdd;
