import { connect } from 'react-redux';
import View from '../components/View';
import { getView, getViewItemId } from '../ducks/views';

const mapStateToProps = (state, ownProps) => ({
  view: getView(state),
  itemId: getViewItemId(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const StateView = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default StateView;
