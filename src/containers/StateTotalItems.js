import { connect } from 'react-redux';
import { getTotalItems } from '../ducks/cart';
import TotalItems from '../components/TotalItems';

const mapStateToProps = (state, ownProps) => ({
  totalItems: getTotalItems(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateTotalItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalItems);

export default StateTotalItems;
