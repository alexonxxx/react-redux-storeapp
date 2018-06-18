import { connect } from 'react-redux';
import { getTotalPrice } from '../ducks/cart';
import TotalPrice from '../components/TotalPrice';

const mapStateToProps = (state, ownProps) => ({
  totalPrice: getTotalPrice(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateTotalPrice = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPrice);

export default StateTotalPrice;
