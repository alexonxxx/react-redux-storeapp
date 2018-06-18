import { connect } from 'react-redux';
import { getTotalItems } from '../ducks/cart';
import TotalItems from '../components/TotalItems';

//s'ha de fer un nou stateCart per connectar amb la cart i també una altre per els productes
const mapStateToProps = (state, ownProps) => ({
  totalItems: getTotalItems(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateTotalItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalItems);

export default StateTotalItems;
