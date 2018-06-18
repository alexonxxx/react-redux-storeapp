import { connect } from 'react-redux';
import AddButton from '../components/AddButton';
import { listProducts } from '../ducks/products';
import MainView from '../components/MainView';

//s'ha de fer un nou stateCart per connectar amb la cart i també una altre per els productes
const mapStateToProps = (state, ownProps) => ({
  productList: listProducts(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);

export default StateProducts;
