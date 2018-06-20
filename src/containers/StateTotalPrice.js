import { connect } from 'react-redux';
import { getTotalPrice } from '../ducks/cart';
import TotalPriceCart from '../components/TotalPriceCart';

const mapStateToProps = (state, ownProps) => ({
  totalPrice: getTotalPrice(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateTotalItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPriceCart);

export default StateTotalItems;
